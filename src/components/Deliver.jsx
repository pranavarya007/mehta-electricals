import React from "react";
import Section from "./Section";
//import image15 from "../images/mehtaElectrical/15.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section
      title="Deliver"
      image={{
        src: "/images/mehtaElectrical/15.jpg",
        shape: 1,
        width: 600, // specify width
        height: 400, // specify height
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The final phase of our solar services focuses on delivery, where we
          ensure that you receive the ongoing support and maintenance necessary
          for long-term success. Our{" "}
          <strong className="font-semibold text-neutral-950">commitment</strong>{" "}
          to your satisfaction doesn’t end with installation; we offer
          comprehensive maintenance plans designed to keep your solar system
          performing at peak efficiency. Regular maintenance checks help
          identify potential issues before they escalate, ensuring that your
          system operates smoothly throughout its lifespan.
        </p>
        <p>
          In addition to maintenance, we provide{" "}
          <strong className="font-semibold text-neutral-950">24/7</strong>{" "}
          support for any questions or concerns you may have. Our dedicated team
          is always just a call away, ready to assist you with troubleshooting,
          system monitoring, and any other needs that may arise. We believe in
          fostering lasting relationships with our clients, and our support
          services reflect our commitment to your long-term satisfaction.
        </p>
        <p>
          Transparency is key in the delivery process. We offer regular
          performance monitoring and{" "}
          <strong className="font-semibold text-neutral-950">
            detailed reporting
          </strong>{" "}
          , allowing you to track your energy production and system health in
          real time. With our comprehensive commissioning process, we ensure
          that every aspect of your solar system meets regulatory standards
          before handing over the project. You can rest{" "}
          <strong className="font-semibold text-neutral-950">assured</strong>{" "}
          that you’re receiving a fully operational and compliant solar
          solution.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Commissioning and Quality Assurance">
          We conduct rigorous commissioning checks to ensure your solar system
          is installed correctly and operating optimally. This includes testing
          all components and verifying compliance with safety standards before
          handing over the system.
        </ListItem>
        <ListItem title="Client Training and Documentation">
          Our team provides training on system operation and maintenance,
          equipping you with the knowledge to manage your solar setup
          confidently. You will receive comprehensive documentation, including
          warranties and maintenance schedules, for your reference.
        </ListItem>
        <ListItem title="Support">
          We offer tailored maintenance plans with regular inspections and
          performance monitoring. Our support team is always available for
          troubleshooting and assistance, ensuring your solar system remains
          efficient and reliable for years to come.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
