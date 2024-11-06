import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At Mehta Electrical & Communication, our approach is simple yet
          effective: we listen, plan, and execute with precision. We begin by
          thoroughly understanding your needs and providing tailored solutions
          that align with your goals. From the initial consultation to project
          completion, we ensure open communication and transparency at every
          step. Our team follows strict safety standards and utilizes the latest
          technology to deliver high-quality results, on time and within budget.
          With a focus on efficiency and customer satisfaction, we’re committed
          to turning your electrical challenges into seamless, reliable
          solutions.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
