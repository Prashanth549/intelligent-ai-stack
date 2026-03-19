import ArticleContainer from "@/components/article/ArticleContainer";
import ArticleTitle from "@/components/article/ArticleTitle";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleText from "@/components/article/ArticleText";
import ArticleList from "@/components/article/ArticleList";
import ArticleHighlight from "@/components/article/ArticleHighlight";
import AnimatedSection from "@/components/article/AnimatedSection";

function Article2() {
  return (
    <ArticleContainer>

      {/* Title */}
      <ArticleTitle>
        AI Copilots in SaaS
      </ArticleTitle>

      {/* Intro */}
      <div id="intro" className="scroll-mt-12 pt-1">    
      <AnimatedSection>
        <ArticleText>
          AI copilots are changing how users interact with software.
        </ArticleText>

        <ArticleText>
          Traditionally, users were required to navigate dashboards, interpret data manually, and execute actions through predefined interfaces. This often meant learning complex workflows, understanding where information resides, and translating business intent into system actions.
        </ArticleText>

        <ArticleText>
          AI copilots introduce a different interaction model.
        </ArticleText>

        <ArticleText>
          Instead of navigating multiple screens, users can describe what they want to achieve, and the system assists in executing those tasks. This shifts the experience from interface-driven to intent-driven.
        </ArticleText>


      </AnimatedSection>
      </div>

      {/* Section 1 */}
      <AnimatedSection>
        <ArticleSection 
          id="shift-in-interaction"
          title="The Shift in Interaction" />

        <ArticleText>
          Most SaaS platforms are built around structured interfaces.
        </ArticleText>

        <ArticleText>
          Users interact with menus, forms, filters, and dashboards to complete tasks. While these systems are powerful, they often require training and familiarity.
        </ArticleText>

        <ArticleText>
          AI copilots reduce this dependency.
        </ArticleText>

        <ArticleText>
          By using natural language, users can:
        </ArticleText>

        <ArticleList
          items={[
            "request specific information",
            "generate reports",
            "automate repetitive actions",
            "explore data without predefined queries",
          ]}
        />

        <ArticleText>
          This lowers the barrier to entry and allows users to focus more on outcomes rather than navigation.
        </ArticleText>
      </AnimatedSection>

      {/* Section 2 */}
      <AnimatedSection>
        <ArticleSection 
          id="what-copilots-do"
          title="What AI Copilots Actually Do" />

        <ArticleText>
          AI copilots are not standalone systems. They operate within existing SaaS platforms, using the platform’s data and workflows.
        </ArticleText>

        <ArticleText>
          Their capabilities typically include:
        </ArticleText>

        <ArticleList
          items={[
            "interpreting user intent through natural language",
            "retrieving relevant data from the system",
            "summarizing insights in a consumable format",
            "triggering actions or workflows based on requests",
          ]}
        />

        <ArticleHighlight>
          In many cases, copilots act as an interface layer on top of existing systems, rather than replacing them.
        </ArticleHighlight>
      </AnimatedSection>

      {/* Section 3 */}
      <AnimatedSection>
        <ArticleSection 
          id="why-it-matters"
          title="Why It Matters" />

        <ArticleText>
          The introduction of AI copilots impacts both usability and productivity.
        </ArticleText>

        <ArticleList
          items={[
            "Faster workflows — tasks that previously required multiple steps can now be completed through a single interaction",
            "Reduced learning curve — new users can interact with software without fully understanding its structure",
            "More intuitive interfaces — software adapts to the user instead of the user adapting to the software",
          ]}
        />

        <ArticleText>
          These changes can significantly improve adoption rates and user efficiency across SaaS platforms.
        </ArticleText>
      </AnimatedSection>

      {/* Section 4 */}
      <AnimatedSection>
        <ArticleSection 
          id="limitations"
          title="Limitations and Considerations" />

        <ArticleList
          items={[
            "accuracy of responses depends on data quality",
            "ambiguity in user queries can lead to incorrect outputs",
            "over-reliance may reduce understanding of underlying systems",
          ]}
        />

        <ArticleText>
          Organizations will need to balance automation with control, ensuring that users can verify and trust the outputs generated by AI systems.
        </ArticleText>
      </AnimatedSection>

      {/* Section 5 */}
      <AnimatedSection>
        <ArticleSection 
          id="future"
          title="Where This Is Heading" />

        <ArticleText>
          As AI capabilities evolve, copilots may become a standard layer across SaaS platforms.
        </ArticleText>

        <ArticleText>
          Instead of being an optional feature, conversational and assistive interfaces could become the primary way users interact with software.
        </ArticleText>

        <ArticleText>
          This may lead to:
        </ArticleText>

        <ArticleList
          items={[
            "fewer traditional dashboards",
            "more context-aware systems",
            "increased automation of decision-making workflows",
          ]}
        />

        <ArticleText>
          The role of software may gradually shift from being a passive tool to an active participant in work processes.
        </ArticleText>
      </AnimatedSection>

      {/* Final */}
      <AnimatedSection>
        <ArticleSection 
          id="final-thought"
          title="Final Thought" />

        <ArticleText>
          AI copilots represent a shift from tools to assistants.
        </ArticleText>

        <ArticleText>
          They do not replace SaaS platforms, but they redefine how users engage with them.
        </ArticleText>

        <ArticleHighlight>
          The long-term impact will depend on how effectively these systems balance usability, accuracy, and trust.
        </ArticleHighlight>
      </AnimatedSection>

    </ArticleContainer>
  );
}

export default Article2;