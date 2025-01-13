import React from "react";
import Section from "./Section";
//import image29 from "../images/mehtaElectrical/29.jpg"
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section
      title="Planning"
      image={{
        src: "/images/mehtaElectrical/29.jpg",
        shape: 1,
        width: 600, // specify width
        height: 400, // specify height
        
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The foundation of any successful solar project lies in thorough
          planning. Our process begins with a comprehensive consultation where
          we listen to your energy{" "}
          <strong className="font-semibold text-neutral-950">needs</strong>
          and vision. Our team conducts an in-depth site assessment, examining
          factors such as sunlight exposure, roof structure, and energy
          consumption patterns. This meticulous analysis allows us to create a
          customized solar solution that maximizes efficiency and minimizes
          costs.
        </p>
        <p>
          We{" "}
          <strong className="font-semibold text-neutral-950">specialize</strong>{" "}
          in designing both off-grid and on-grid solar systems. Off-grid systems
          are perfect for those seeking energy independence, allowing you to
          harness solar power without relying on the utility grid. In contrast,
          our on-grid solutions enable you to benefit from the grid while still
          reducing your electricity bills through net metering and solar
          credits. Our engineers{" "}
          <strong className="font-semibold text-neutral-950">
            work closely
          </strong>{" "}
          with you to develop a tailored system that aligns with your specific
          energy goals.
        </p>
        <p>
          In addition to solar power systems, we recognize the growing demand
          for electric vehicle (EV) infrastructure. Our planning services extend
          to the strategic design and implementation of EV charging stations,
          ensuring that you are well-prepared for the
          <strong className="font-semibold text-neutral-950"> future</strong> of
          transportation. By investing in EV infrastructure now, you position
          your property as a forward-thinking space that embraces sustainable
          technology.
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive
          <strong className="font-semibold text-neutral-950"> plan</strong> and,
          more importantly, a budget.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>On site visit</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Data Collection</TagListItem>
        <TagListItem>Comprehensive energy audit</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
