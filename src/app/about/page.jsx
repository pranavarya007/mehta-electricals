import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            With a legacy spanning nearly two decades, Mehta Electrical &
            Communication has established itself as a reliable name in
            electrical contracting and services. As an ISO 9001-2008 certified
            "A" class Electrical Contractor, licensed under the authority of the
            Haryana Government, we bring unmatched expertise to every project.
            Our journey began in 2006 with a commitment to providing safe,
            high-quality, and efficient electrical solutions. Today, we cater to
            a diverse clientele, offering everything from residential wiring to
            complex commercial installations. Our team of skilled professionals
            is dedicated to delivering excellence, on time and with
            uncompromising quality.
          </p>
          <p>
            At Mehta Electrical & Communication, we believe in building lasting
            relationships with our clients. We take the time to understand each
            project’s unique requirements and tailor our services to meet your
            specific needs. Our dedication to safety, reliability, and
            innovation keeps us at the forefront of the industry. Whether it’s a
            large-scale industrial project or a residential upgrade, we handle
            each assignment with the same level of commitment and precision,
            aiming to exceed expectations at every turn.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Employees" />
          <StatListItem value="100+" label="Clients" />
          <StatListItem value="₹ 25Cr+" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
