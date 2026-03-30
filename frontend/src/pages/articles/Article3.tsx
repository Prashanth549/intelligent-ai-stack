import ArticleContainer from "@/components/article/ArticleContainer";
import ArticleTitle from "@/components/article/ArticleTitle";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleText from "@/components/article/ArticleText";
import ArticleList from "@/components/article/ArticleList";
import ArticleHighlight from "@/components/article/ArticleHighlight";
import AnimatedSection from "@/components/article/AnimatedSection";

function Article3() {
  return (
    <ArticleContainer>

      {/* Title */}
      <ArticleTitle>
        From Prompt to Production: The Real Architecture Behind AI Systems
      </ArticleTitle>

      {/* Intro */}
      <div id="intro" className="scroll-mt-12 pt-1">
        <AnimatedSection>
          <ArticleText>
            In the previous articles, we explored how SaaS is evolving into intelligent systems and how interfaces are shifting toward AI copilots.
          </ArticleText>

          <ArticleText>
            These changes point to a deeper transformation.
          </ArticleText>

          <ArticleText>
            Software is no longer just storing data or displaying information. It is becoming a system that can understand, reason, and act.
          </ArticleText>

          <ArticleText>
            But what actually powers these AI systems behind the scenes?
          </ArticleText>

          <ArticleHighlight>
            Prompts are not the system. They are only an interface into it.
          </ArticleHighlight>
        </AnimatedSection>
      </div>

      {/* Section 1 */}
      <AnimatedSection>
        <ArticleSection
          id="misconception"
          title="The Biggest Misconception About AI Systems"
        />

        <ArticleText>
          A common assumption is that connecting a UI to an AI model creates an AI application.
        </ArticleText>

        <ArticleText>
          In reality, if you remove data, workflows, and system logic, what remains is just a model responding to input.
        </ArticleText>

        <ArticleHighlight>
          A model alone is not a product.
        </ArticleHighlight>

        <ArticleText>
          The real value comes from how the model is integrated into a larger system.
        </ArticleText>
      </AnimatedSection>

      {/* Section 2 */}
      <AnimatedSection>
        <ArticleSection
          id="ai-stack"
          title="The Intelligent AI Stack"
        />

        <ArticleText>
          Modern AI systems are built as layered architectures, where each layer plays a specific role in delivering intelligence.
        </ArticleText>

        <ArticleText>
          This layered approach is what we define as the Intelligent AI Stack.
        </ArticleText>
      </AnimatedSection>

      {/* Section 3 */}
      <AnimatedSection>
        <ArticleSection id="layers" title="Core Layers of an AI System" />

        <ArticleSection title="1. Interface Layer" />
        <ArticleText>
          Captures user intent through chat interfaces, forms, or APIs.
        </ArticleText>

        <ArticleSection title="2. Application Layer" />
        <ArticleText>
          Acts as the system backbone, connecting user input with AI capabilities.
        </ArticleText>

        <ArticleText>
          From a developer’s perspective, this is typically implemented as a backend service. In our approach, we use FastAPI to handle requests, manage sessions, and coordinate system components.
        </ArticleText>

        <ArticleSection title="3. Orchestration Layer" />
        <ArticleText>
          Defines how the system thinks — structuring prompts, managing workflows, and coordinating logic across components.
        </ArticleText>

        <ArticleSection title="4. Context Layer (RAG)" />
        <ArticleText>
          Retrieves relevant data using vector databases, embeddings, and APIs to provide accurate, context-aware responses.
        </ArticleText>

        <ArticleHighlight>
          Without context, AI is guessing.
        </ArticleHighlight>

        <ArticleSection title="5. Model Layer" />
        <ArticleText>
          Handles reasoning and generation using large language models.
        </ArticleText>

        <ArticleSection title="6. Memory Layer" />
        <ArticleText>
          Stores interactions and enables continuity across sessions.
        </ArticleText>

        <ArticleSection title="7. Data Layer" />
        <ArticleText>
          Provides the foundation through structured and unstructured data, logs, and analytics.
        </ArticleText>
      </AnimatedSection>

      {/* Section 4 */}
      <AnimatedSection>
        <ArticleSection id="flow" title="How an AI System Works" />

        <ArticleText>
          A typical AI request flows through multiple layers:
        </ArticleText>

        <ArticleList
          items={[
            "User submits input",
            "Backend processes request",
            "System retrieves relevant context",
            "Prompt is constructed",
            "Model generates response",
            "System executes actions",
            "Interaction is stored",
          ]}
        />

        <ArticleText>
          What appears to be a simple response is actually the result of coordinated system components.
        </ArticleText>
      </AnimatedSection>

      {/* Section 5 */}
      <AnimatedSection>
        <ArticleSection id="example" title="A Real-World Example" />

        <ArticleText>
          Consider an AI Career Copilot.
        </ArticleText>

        <ArticleText>
          A user asks: “Which roles am I best suited for?”
        </ArticleText>

        <ArticleList
          items={[
            "Resume is analyzed",
            "Job data is retrieved",
            "Skills are matched with roles",
            "AI evaluates fit",
            "Recommendations are generated",
          ]}
        />

        <ArticleText>
          This entire process is powered by multiple layers working together.
        </ArticleText>
      </AnimatedSection>

      {/* Section 6 */}
      <AnimatedSection>
        <ArticleSection id="mistakes" title="Where Most AI Applications Fail" />

        <ArticleList
          items={[
            "Over-reliance on prompts",
            "Lack of context integration",
            "Poor data quality",
            "No execution layer",
            "Ignoring scalability and cost",
          ]}
        />

        <ArticleHighlight>
          If your AI application is just calling an API, it is a demo — not a product.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Section 7 */}
      <AnimatedSection>
        <ArticleSection id="future" title="Where This Is Heading" />

        <ArticleText>
          AI systems are evolving toward autonomous agents capable of executing workflows and making decisions.
        </ArticleText>

        <ArticleText>
          The gap between intent and execution will continue to shrink.
        </ArticleText>
      </AnimatedSection>

      {/* Final */}
      <AnimatedSection>
        <ArticleSection id="final-thought" title="Final Thought" />

        <ArticleText>
          Traditional software required users to navigate systems to achieve outcomes.
        </ArticleText>

        <ArticleText>
          Intelligent systems allow users to express intent — and the system handles the rest.
        </ArticleText>

        <ArticleHighlight>
          The value of AI is not in the model. It is in the system built around it.
        </ArticleHighlight>
      </AnimatedSection>

    </ArticleContainer>
  );
}

export default Article3;