import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
//import image35 from "../images/mehtaElectrical/35.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Powering Your Projects: Explore Our Range of Services !"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As an "A" class Electrical Contractor, we specialize in a variety of
          services. Some of our most demanding services are
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12 lg:pb-11">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={"/images/mehtaElectrical/35.jpg"}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                width={200} // Image width
                height={100} // Image height
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Transformers">
              We specialise in transformer installation and maintenance services
              to ensure safe and efficient power distribution. Our expert team
              handles everything from selection and installation to routine
              inspections and repairs, guaranteeing optimal performance and
              longevity for your electrical systems.
            </ListItem>
            <ListItem title="Solar">
              Comprehensive solar solutions designed to harness the power of the
              sun for your energy needs. From installation and system design to
              maintenance and upgrades, we provide expert guidance and services
              to help you reduce energy costs and promote sustainability.
            </ListItem>
            <ListItem title="Electronic Meters">
              Professional installation and servicing of electronic meters to
              accurately monitor energy consumption. Our skilled technicians
              ensure reliable and efficient meter setups, enabling you to track
              usage and manage energy costs effectively.
            </ListItem>
            <ListItem title="HT and LT Panels">
              Expert design, installation, and maintenance of HT and LT panels
              to ensure safe and efficient power distribution for your facility.
              Our solutions are tailored to meet industry standards and optimize
              electrical performance, providing reliable power management for
              various applications.
            </ListItem>
            {/*
              
               <ListItem title="Oil Filteration">
              Specialized transformer oil filtration and dehydration services to
              enhance the lifespan and efficiency of your transformers. Our
              advanced techniques remove impurities and moisture from
              transformer oil, ensuring optimal performance, reducing
              operational risks, and prolonging equipment life.
            </ListItem>
            <ListItem title="Electronic Meters">
              Professional installation and servicing of electronic meters to
              accurately monitor energy consumption. Our skilled technicians
              ensure reliable and efficient meter setups, enabling you to track
              usage and manage energy costs effectively.
            </ListItem>
            
              */}

            <ListItem title="Supply, Installation, Testing, and Commissioning">
              Comprehensive services covering the supply, installation, testing,
              and commissioning of electrical systems and equipment. Our
              experienced team ensures that every project meets industry
              standards and operational requirements, delivering a seamless and
              reliable electrical infrastructure for your business
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
