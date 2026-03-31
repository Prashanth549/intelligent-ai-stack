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

      <ArticleTitle>
        From Prompt to Production: Understanding the Architecture Behind AI Systems
      </ArticleTitle>

      {/* Intro */}
      <div id="intro" className="scroll-mt-12 pt-1">
        <AnimatedSection>
          <ArticleText>
            In the previous articles, we explored how SaaS is evolving into more intelligent systems and how interfaces are gradually shifting toward AI copilots.
          </ArticleText>

          <ArticleText>
            These shifts suggest a deeper change in how software is being built and used.
          </ArticleText>

          <ArticleText>
            From the outside, AI systems can appear simple — a prompt goes in, and a response comes out.
          </ArticleText>

          <ArticleText>
            But as you start exploring or building these systems, you begin to see that there are multiple layers working behind the scenes.
          </ArticleText>

          <ArticleHighlight>
            Prompts are often just the entry point — not the system itself.
          </ArticleHighlight>
        </AnimatedSection>
      </div>

      {/* Misconception */}
      <AnimatedSection>
        <ArticleSection id="misconception" title="Looking Beyond the Model" />

        <ArticleText>
          Early on, it’s natural to focus on the model, since that’s where responses are generated.
        </ArticleText>

        <ArticleText>
          Over time, however, it becomes clear that models rely heavily on surrounding systems to be useful in real-world scenarios.
        </ArticleText>

        <ArticleText>
          These systems often include data pipelines, workflows, and application logic.
        </ArticleText>

        <ArticleHighlight>
          A model can generate output, but the system determines how useful that output is.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Product */}
      <AnimatedSection>
        <ArticleSection id="product-vs-model" title="From Model to System" />

        <ArticleText>
          As AI applications evolve, there is a gradual shift from experimenting with models to designing systems around them.
        </ArticleText>

        <ArticleText>
          In practice, this often involves:
        </ArticleText>

        <ArticleList
          items={[
            "ensuring consistency across responses",
            "integrating real-world data",
            "handling unexpected inputs",
            "aligning outputs with user workflows",
          ]}
        />

        <ArticleHighlight>
          The usefulness of an AI application often depends on how well the system is structured around the model.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Stack */}
      <AnimatedSection>
        <ArticleSection id="ai-stack" title="A Layered View of AI Systems" />

        <ArticleText>
          One helpful way to understand AI systems is to think of them as layered architectures.
        </ArticleText>

        <ArticleText>
          Each layer contributes to how the system behaves and how effectively it delivers results.
        </ArticleText>
      </AnimatedSection>

      {/* Layers */}
      <AnimatedSection>
        <ArticleSection id="layers" title="Core Layers" />

        <ArticleSection title="1. Interface Layer" />
        <ArticleText>
          This is where users interact with the system, often through chat interfaces or APIs.
        </ArticleText>

        <ArticleSection title="2. Application Layer" />
        <ArticleText>
          This layer typically handles requests, manages sessions, and connects different parts of the system.
        </ArticleText>

        <ArticleText>
          In our approach, we use FastAPI to structure this layer, though the broader idea is to have a reliable backend coordinating the system.
        </ArticleText>

        <ArticleSection title="3. Orchestration Layer" />
        <ArticleText>
          This layer helps guide how the system responds — including how prompts are structured and how workflows are managed.
        </ArticleText>

        <ArticleList
          items={[
            "managing multi-step processes",
            "deciding which components to use",
            "handling fallback scenarios",
          ]}
        />

        <ArticleSection title="4. Context Layer (RAG)" />
        <ArticleText>
          This layer is often responsible for retrieving relevant information from external sources or databases.
        </ArticleText>

        <ArticleText>
          It helps ensure that responses are grounded in actual data rather than relying only on the model’s internal knowledge.
        </ArticleText>

        <ArticleHighlight>
          Access to the right context can significantly improve the usefulness of AI outputs.
        </ArticleHighlight>

        <ArticleSection title="5. Model Layer" />
        <ArticleText>
          This is where reasoning and response generation take place using language models.
        </ArticleText>

        <ArticleSection title="6. Memory Layer" />
        <ArticleText>
          This layer can help maintain continuity across interactions and personalize responses over time.
        </ArticleText>

        <ArticleSection title="7. Data Layer" />
        <ArticleText>
          This forms the foundation, supporting the system with structured and unstructured data.
        </ArticleText>
      </AnimatedSection>

      {/* Flow */}
      <AnimatedSection>
        <ArticleSection id="flow" title="A Typical Flow" />

        <ArticleList
          items={[
            "User provides input",
            "System processes the request",
            "Relevant data is retrieved",
            "Context is added",
            "Model generates response",
            "Optional actions are executed",
            "Interaction is stored",
          ]}
        />

        <ArticleText>
          While this process is often invisible to users, each step contributes to the final experience.
        </ArticleText>
      </AnimatedSection>

      {/* Builder */}
      <AnimatedSection>
        <ArticleSection id="builder-thinking" title="A Builder’s Perspective" />

        <ArticleText>
          As you start working with these systems, the focus gradually shifts from individual features to overall system design.
        </ArticleText>

        <ArticleList
          items={[
            "What data is required?",
            "How will it be accessed?",
            "What decisions should the system make?",
            "How should failures be handled?",
          ]}
        />

        <ArticleHighlight>
          Building AI systems often involves organizing intelligence rather than simply adding it.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Tradeoffs */}
      <AnimatedSection>
        <ArticleSection id="tradeoffs" title="Design Trade-offs" />

        <ArticleText>
          AI systems often involve trade-offs that depend on the use case.
        </ArticleText>

        <ArticleList
          items={[
            "accuracy vs latency",
            "cost vs performance",
            "flexibility vs control",
            "automation vs reliability",
          ]}
        />
      </AnimatedSection>

      {/* Mistakes */}
      <AnimatedSection>
        <ArticleSection id="mistakes" title="Common Challenges" />

        <ArticleList
          items={[
            "limited access to relevant data",
            "over-reliance on prompts",
            "difficulty handling edge cases",
            "scaling and cost considerations",
          ]}
        />
      </AnimatedSection>

      {/* Future */}
      <AnimatedSection>
        <ArticleSection id="agents" title="Looking Ahead" />

        <ArticleText>
          AI systems are gradually moving toward more proactive behavior.
        </ArticleText>

        <ArticleText>
          This may include systems that assist with workflows, coordinate tasks, and support decision-making.
        </ArticleText>

        <ArticleHighlight>
          The direction seems to be moving from responding to inputs toward helping achieve outcomes.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Final */}
      <AnimatedSection>
        <ArticleSection id="final-thought" title="Final Thought" />

        <ArticleText>
          Software has traditionally required users to navigate interfaces to get results.
        </ArticleText>

        <ArticleText>
          With AI, there is a gradual shift toward expressing intent and letting systems handle more of the process.
        </ArticleText>

        <ArticleHighlight>
          The impact of AI may depend less on the model itself, and more on how the surrounding system is designed.
        </ArticleHighlight>
      </AnimatedSection>

    </ArticleContainer>
  );
}

export default Article3;