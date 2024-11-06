import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Empowering Our Team to Deliver Exceptional Service for You"
        invert
      >
        <p>
          We’re not just a team; we’re a family that shares a commitment to
          deliver quality and bring value to our clients and our community.
          Here’s what guides us every day:
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Collaboration and Teamwork" invert>
            We thrive on collaboration and open communication. At Mehta
            Electricals, every voice counts, and we encourage team members at
            all levels to contribute ideas, ask questions, and engage in
            problem-solving together. By working as a unit, we achieve more and
            deliver solutions that are stronger and more efficient.
          </GridListItem>
          <GridListItem title="Integrity and Accountability" invert>
            Integrity is at the core of everything we do. We hold ourselves to
            the highest standards and take ownership of our work. When we commit
            to a project, we see it through with transparency and
            accountability, fostering trust within our team and with our
            clients.
          </GridListItem>
          <GridListItem title="Continuous Learning and Innovation" invert>
            Our team is committed to lifelong learning, staying updated with the
            latest trends, technologies, and practices. From technical training
            to personal development, we support our employees in expanding their
            knowledge, encouraging them to bring new and better ways to meet our
            clients’ needs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
