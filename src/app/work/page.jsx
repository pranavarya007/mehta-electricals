import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ContactSection from "@/components/ContactSection";
import React from "react";
import Clients from "@/components/Clients";
import WorkHighlights from "@/components/WorkHighlights";

const projects = [
  {
    client: "Conscient",
    projectName: "ELEVATE RESERVE",
    description:
      'Work order for 11KV Temporary Electrical Connection work at project "Elevate Reserve" located in Sector-62, Gurugram from M/s Consceint Infrastructure Pvt. Ltd.',
  },
  {
    client: "Heritage Max Realtech Private Limited / ELEVATE",
    projectName: "Heritage Max Realtech Private Limited / ELEVATE",
    description:
      "Work order for provision of consultancy services in relation to approval of electrification plan and sanction of ultimate load for our residential project 'Elevate' located in Sector 59, Gurugram.",
  },
  {
    client: "Conscient",
    projectName: "ORGANIC ONE",
    description:
      'Work order for obtaining power assurance for electricity supply and shifting of LT line at the upcoming mixed use project "ORGANIC ONE" (consisting of 78% residential and 22% commercial) located in Sector 62, Gurugram, Haryana, for M/S Conscient Infrastructure Pvt. Ltd.',
  },
  {
    client: "Keywest Eduinfra & Services Pvt. Ltd",
    projectName: "Keywest Eduinfra & Services Pvt. Ltd",
    description:
      "Work order for SITC of temporary electrical connection for the upcoming project located in Sector 80, Gurugram, Haryana, for M/s Keywest Eduinfra & Services Pvt. Ltd.",
  },
  {
    client: "Conscient",
    projectName: "HABITAT 78",
    description:
      "Work order for supply, installation, testing, and commissioning of CT/PT in HT meter 33 KVA Substation at affordable residential housing society 'HABITAT 78' located in Sector 78, Faridabad.",
  },
  {
    client: "Heritage Max Realtech Private Limited / ELEVATE",
    projectName: "Heritage Max Realtech Private Limited / ELEVATE",
    description:
      "Work order for provision of consultancy service in relation to approval of CEI Inspection, Lift NOC & work related to partial load for our residential project 'ELEVATE' located in Sector 59, Gurugram.",
  },
  {
    client: "Conscient",
    projectName: "___",
    description:
      "Work order for SITC of 33KV Feeding line from switching station to meter room for the affordable group housing for phase I and II located at Sector 78, Faridabad, Haryana, for M/S Conscient Infrastructure Pvt. Ltd.",
  },
  {
    client: "Heritage Max Realtech Private Limited / ELEVATE",
    projectName: "Heritage Max Realtech Private Limited / ELEVATE",
    description:
      "Work order for SITC of 33KV Feeding line, grouping with DHBVN, and relative liasioning for our residential project 'ELEVATE' located in Sector 59, Gurugram.",
  },
  {
    client: "Dream House Infrastructure Private Limited / HERITAGE MAX",
    projectName: "Dream House Infrastructure Private Limited / HERITAGE MAX",
    description:
      "Work order for SITC of 33KV Feeding line from switching station to premises and relative liasioning for residential group housing 'HERITAGE MAX' located in Sector 102, Gurugram, Haryana.",
  },
  {
    client: "Conscient",
    projectName: "Conscient One",
    description:
      "Work order for supply, installation, testing, and commissioning of transformer and 11/33KV line work for partial load connection at Conscient One commercial project for M/S Conscient Infrastructure Pvt. Ltd., Sector 109, Gurugram.",
  },
  {
    client: "Conscient",
    projectName: "HABITAT RESIDENCIES",
    description:
      "Work order for coordination for submission/inspection & SLD approval of electrical high side, DG & Elevators NOC at affordable multi-storeyed housing 'HABITAT RESIDENCIES' Sector 78, Faridabad.",
  },
];

const WorkPage = () => {
  return (
    <div className="mt-[100px] md:mt-0">
      <Clients className="max-w-5xl " />
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      ></PageIntro>

      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold text-neutral-900 mb-10">
            Projects Overview
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 shadow-md bg-white space-y-4"
              >
                <h2 className="text-xl font-semibold text-neutral-900">
                  {project.projectName}
                </h2>
                <p className="text-neutral-700">
                  <strong>Client Name:</strong> {project.client}
                </p>
                <p className="text-neutral-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <WorkHighlights />
      <ContactSection />
    </div>
  );
};

export default WorkPage;
