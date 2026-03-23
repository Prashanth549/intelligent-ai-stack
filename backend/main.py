from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import json

from generate_article import save_article

import math
from datetime import datetime

from fastapi import Header, HTTPException

ADMIN_API_KEY = os.getenv("ADMIN_API_KEY")


load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# -----------------------------
# ARTICLE GENERATOR
# -----------------------------
class ArticleRequest(BaseModel):
    topic: str



import math
from datetime import datetime

def generate_metadata(article_json: dict):
    # 🔥 Combine all text
    full_text = " ".join(
        [
            " ".join(section.get("content", []))
            for section in article_json.get("sections", [])
        ]
    )

    # ✅ Description (first 150 chars)
    description = full_text[:150] + "..."

    # ✅ Read time (200 words/min)
    word_count = len(full_text.split())
    read_time = max(1, math.ceil(word_count / 200))
    read_time_str = f"{read_time} min read"

    # ✅ Category (simple rule-based for now)
    topic_lower = article_json.get("title", "").lower()

    if "saas" in topic_lower:
        category = "AI in SaaS"
    elif "data" in topic_lower:
        category = "Data & Analytics"
    else:
        category = "AI Systems"

    # ✅ Date
    date = datetime.now().strftime("%B %Y")

    return {
        "description": description,
        "readTime": read_time_str,
        "category": category,
        "date": date,
    }

def generate_article(topic: str):
    prompt = f"""
You are an expert in SaaS and AI systems.

Generate a structured article in JSON format.

Topic: {topic}

Return STRICT JSON in this format:

{{
  "title": "string",
  "sections": [
    {{
      "title": "string",
      "content": ["paragraph1", "paragraph2"],
      "list": ["point1", "point2"]
    }}
  ]
}}

Rules:
- Do NOT return markdown
- Do NOT add explanation
- Only valid JSON
"""

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    raw = response.choices[0].message.content.strip()

    # 🔥 Handle ```json blocks
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw.replace("json", "", 1).strip()

    try:
        return json.loads(raw)
    except Exception as e:
        print("JSON parsing error:", raw)

        # fallback (prevents crash)
        return {
            "title": topic,
            "sections": [
                {
                    "title": "Error",
                    "content": ["Failed to generate article. Please try again."]
                }
            ]
        }


def add_article_metadata(topic: str, filename: str, article_json: dict):
    path = "articles.json"

    if os.path.exists(path):
        with open(path, "r") as f:
            data = json.load(f)
    else:
        data = []

    article_id = filename.replace(".json", "")

    # 🔥 Generate dynamic metadata
    meta = generate_metadata(article_json)

    new_article = {
        "id": article_id,
        "title": article_json.get("title", topic),
        "description": meta["description"],
        "file": filename,
        "category": meta["category"],
        "featured": False,
        "date": meta["date"],
        "readTime": meta["readTime"]
    }

    data.insert(0, new_article)

    with open(path, "w") as f:
        json.dump(data, f, indent=2)




# -----------------------------
# AI CHAT
# -----------------------------
class AskRequest(BaseModel):
    question: str
    context: str


@app.post("/generate-article")
async def generate_article_api(
    request: ArticleRequest,
    x_api_key: str = Header(None)
):
    if x_api_key != ADMIN_API_KEY:
        raise HTTPException(status_code=403, detail="Unauthorized")

    article = generate_article(request.topic)

    filename = save_article(request.topic, article)
    add_article_metadata(request.topic, filename, article)

    return {
        "article": article,
        "file": filename
    }

@app.post("/ask-ai")
async def ask_ai(request: AskRequest):
    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert in AI SaaS systems. Answer clearly and concisely."
                },
                {
                    "role": "user",
                    "content": f"""
Article Content:
{request.context}

Question:
{request.question}
"""
                }
            ]
        )

        return {"answer": response.choices[0].message.content}

    except Exception as e:
        return {"error": str(e)}


# -----------------------------
# GET ARTICLES
# -----------------------------
@app.get("/articles")
async def get_articles():
    if not os.path.exists("articles.json"):
        return []

    with open("articles.json", "r") as f:
        return json.load(f)