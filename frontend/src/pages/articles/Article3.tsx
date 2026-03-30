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

      {/* Misconception */}
      <AnimatedSection>
        <ArticleSection id="misconception" title="The Biggest Misconception About AI Systems" />

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

      {/* Product vs Model */}
      <AnimatedSection>
        <ArticleSection id="product-vs-model" title="What Makes an AI System a Product" />

        <ArticleText>
          Many early AI applications fail because they confuse a model with a product.
        </ArticleText>

        <ArticleText>
          A model can generate responses, but a product must:
        </ArticleText>

        <ArticleList
          items={[
            "deliver consistent outcomes",
            "operate reliably under different conditions",
            "integrate with real data and workflows",
            "handle errors and edge cases",
          ]}
        />

        <ArticleHighlight>
          The difference between a demo and a product is not intelligence — it is system design.
        </ArticleHighlight>
      </AnimatedSection>

      {/* AI Stack */}
      <AnimatedSection>
        <ArticleSection id="ai-stack" title="The Intelligent AI Stack" />

        <ArticleText>
          Modern AI systems are built as layered architectures, where each layer plays a specific role.
        </ArticleText>

        <ArticleText>
          This layered approach is what we define as the Intelligent AI Stack.
        </ArticleText>
      </AnimatedSection>

      {/* Layers */}
      <AnimatedSection>
        <ArticleSection id="layers" title="Core Layers of an AI System" />

        <ArticleSection title="1. Interface Layer" />
        <ArticleText>
          Captures user intent through chat interfaces, APIs, or structured inputs.
        </ArticleText>

        <ArticleSection title="2. Application Layer" />
        <ArticleText>
          Acts as the system backbone connecting user input with AI capabilities.
        </ArticleText>

        <ArticleText>
          From a developer’s perspective, this is implemented as a backend service. In our approach, we use FastAPI to handle requests, manage sessions, and coordinate system components.
        </ArticleText>

        <ArticleSection title="3. Orchestration Layer" />
        <ArticleText>
          This is where the system begins to behave intelligently.
        </ArticleText>

        <ArticleList
          items={[
            "structuring prompts dynamically",
            "deciding which tools or APIs to call",
            "managing multi-step workflows",
            "handling fallback and errors",
          ]}
        />

        <ArticleHighlight>
          The model generates responses, but orchestration decides what should happen.
        </ArticleHighlight>

        <ArticleSection title="4. Context Layer (RAG)" />
        <ArticleText>
          This layer enables access to real-time and external data.
        </ArticleText>

        <ArticleList
          items={[
            "convert data into embeddings",
            "store in vector databases",
            "retrieve relevant context",
            "inject into prompts",
          ]}
        />

        <ArticleHighlight>
          Without context, AI is guessing. With context, AI becomes useful.
        </ArticleHighlight>

        <ArticleSection title="5. Model Layer" />
        <ArticleText>
          Handles reasoning and response generation using large language models.
        </ArticleText>

        <ArticleSection title="6. Memory Layer" />
        <ArticleText>
          Stores past interactions and enables continuity and personalization.
        </ArticleText>

        <ArticleSection title="7. Data Layer" />
        <ArticleText>
          Provides structured and unstructured data, logs, and analytics for system improvement.
        </ArticleText>
      </AnimatedSection>

      {/* Flow */}
      <AnimatedSection>
        <ArticleSection id="flow" title="How an AI System Works" />

        <ArticleList
          items={[
            "User submits input",
            "Backend processes request",
            "System retrieves context",
            "Prompt is constructed",
            "Model generates response",
            "System executes actions",
            "Interaction is stored",
          ]}
        />

        <ArticleText>
          What appears simple is actually a coordinated system of multiple layers working together.
        </ArticleText>
      </AnimatedSection>

      {/* Builder Thinking */}
      <AnimatedSection>
        <ArticleSection id="builder-thinking" title="Designing AI Systems: A Builder’s Perspective" />

        <ArticleList
          items={[
            "What data does the system need?",
            "How will the system access that data?",
            "What actions should the system take?",
            "How will failures be handled?",
          ]}
        />

        <ArticleHighlight>
          AI systems are not built by adding intelligence. They are built by structuring it.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Example */}
      <AnimatedSection>
        <ArticleSection id="example" title="A Real-World Example" />

        <ArticleText>
          Consider an AI Career Copilot.
        </ArticleText>

        <ArticleList
          items={[
            "Resume is analyzed",
            "Job data is retrieved",
            "Skills matched with roles",
            "AI evaluates fit",
            "Recommendations generated",
          ]}
        />
      </AnimatedSection>

      {/* Tradeoffs */}
      <AnimatedSection>
        <ArticleSection id="tradeoffs" title="Trade-offs in AI System Design" />

        <ArticleList
          items={[
            "Accuracy vs latency",
            "Cost vs performance",
            "Flexibility vs control",
            "Automation vs reliability",
          ]}
        />
      </AnimatedSection>

      {/* Mistakes */}
      <AnimatedSection>
        <ArticleSection id="mistakes" title="Where Most AI Applications Fail" />

        <ArticleList
          items={[
            "Over-reliance on prompts",
            "No context layer",
            "Poor data integration",
            "No execution layer",
            "Ignoring cost and scale",
          ]}
        />

        <ArticleHighlight>
          If your AI app is just calling an API, it is a demo — not a product.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Agents */}
      <AnimatedSection>
        <ArticleSection id="agents" title="From Assistants to Agents" />

        <ArticleList
          items={[
            "multi-step planning",
            "system-to-system interaction",
            "autonomous execution",
            "decision-making",
          ]}
        />

        <ArticleHighlight>
          The evolution of AI is moving from responses to outcomes.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Final */}
      <AnimatedSection>
        <ArticleSection id="final-thought" title="Final Thought" />

        <ArticleText>
          Traditional software required users to navigate systems.
        </ArticleText>

        <ArticleText>
          Intelligent systems allow users to express intent — and systems handle execution.
        </ArticleText>

        <ArticleHighlight>
          The value of AI is not in the model. It is in the system built around it.
        </ArticleHighlight>
      </AnimatedSection>

    </ArticleContainer>
  );
}

export default Article3;