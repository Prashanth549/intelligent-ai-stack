import json

from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def save_article(topic: str, content: dict):
    filename = topic.lower().replace(" ", "-") + ".json"
    path = f"../frontend/public/content/{filename}"

    with open(path, "w", encoding="utf-8") as f:
        json.dump(content, f, indent=2)

    return filename