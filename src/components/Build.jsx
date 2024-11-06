import React from "react";
import Section from "./Section";
//import image28 from "../images/mehtaElectrical/28.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section
      title="Execution"
      image={{ 
        src: "/images/mehtaElectrical/28.jpg", 
        shape: 2, 
         width: 600,  // specify width
         height: 400, // specify height
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the planning phase is complete, we transition into execution,
          where our skilled technicians bring your solar project to life. Our
          installation team is equipped with the latest tools and industry best
          practices, ensuring that every solar panel is installed to perfection.
          We take great care in optimizing the placement of each panel,
          maximizing sunlight exposure and energy output.
        </p>
        <p>
          Our commitment to quality is evident in our approach to electric
          vehicle (EV) services. As the popularity of electric vehicles
          continues to rise, we provide comprehensive installation of EV
          charging stations that cater to both residential and commercial needs.
          Our team ensures that the infrastructure is not only functional but
          also integrates seamlessly with your existing electrical systems.
        </p>
        <p>
          Safety and reliability are our top priorities during the execution
          phase. Each component of your solar system undergoes rigorous testing
          to ensure it meets our high standards and complies with all relevant
          safety regulations. Our experienced technicians perform detailed
          checks to guarantee that your system operates flawlessly from day one,
          providing you with confidence in your investment.
        </p>
      </div>
      <Blockquote
        author={{ name: "Manish Chaudhary", role: "CEO of Jindal Steel" }}
        className="mt-12"
      >
        Mehta Electrical & Communication were so regular with their progress
        updates we almost began to think they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;
