import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          While we explore the latest advancements in electrical solutions, we
          also recognize the value of tried-and-true methods that have served
          our clients well. We remain committed to our foundational principles,
          ensuring that every project reflects our dedication to quality,
          reliability, and customer satisfaction.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Integrity">
            We uphold honesty and transparency in every interaction, ensuring
            trust and reliability in all our services.
          </GridListItem>
          <GridListItem title="Efficient">
            We strive for optimal performance in all our operations, ensuring
            timely project completion and minimal waste, which ultimately saves
            our clients time and resources.
          </GridListItem>
          <GridListItem title="Sustainability">
            We are dedicated to promoting sustainable practices in our projects,
            contributing to a greener future for our community.
          </GridListItem>
          <GridListItem title="Collaboration">
            We believe in the power of teamwork and open communication, working
            closely with clients, partners, and our skilled workforce to achieve
            shared goals and deliver outstanding results.
          </GridListItem>
          <GridListItem title="Customer Focus">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            We embrace cutting-edge technology and industry best practices to
            provide effective and efficient electrical solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
