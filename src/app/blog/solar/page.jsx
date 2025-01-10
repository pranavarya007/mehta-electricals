import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
const Solar = () => {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Solar Solution"></PageIntro>
      <Section
        title="Solar"
        image={{
          src: "/images/mehtaElectrical/15.JPG",
          shape: 1,
          width: 600, // specify width
          height: 400, // specify height
        }}
      >
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            Solar energy is one of the most reliable and sustainable sources of
            power, helping reduce dependence on non-renewable energy. At Mehta
            Electrical & Communication, we offer complete solar solutions that
            cover everything from initial planning to installation and ongoing
            maintenance. Our solar systems are designed to meet your energy
            needs while minimizing environmental impact, contributing to a
            greener planet.
          </p>
          <br />
          <p>
            Our solar energy solutions are customized to fit residential,
            commercial, and industrial applications. Whether you&apos;re interested
            in installing rooftop solar panels for your home or developing
            large-scale solar farms for your business, our experienced team is
            equipped to handle projects of all sizes with efficiency and
            expertise.
          </p>
          <br />
          <p>
            From the initial consultation, where we assess your energy
            requirements, to system design and installation, we ensure that
            every step of the process is executed flawlessly. We specialize in
            integrating solar energy systems with your existing electrical
            infrastructure, optimizing energy generation and storage to maximize
            your return on investment and reduce electricity costs.
          </p>
          <br />
          <p>
            Our services also extend to regular maintenance and system
            performance monitoring, ensuring that your solar installation
            continues to operate at peak efficiency throughout its lifespan. We
            are committed to providing long-term support, and we offer robust
            maintenance packages to keep your solar system in top shape.
          </p>
          <br />
          <p>
            At Mehta Electrical & Communication, we believe that solar energy is
            the future of sustainable power. Our expert team is dedicated to
            delivering high-quality, reliable, and cost-effective solar
            solutions that align with your energy goals. Invest in solar energy
            today and experience the benefits of reduced energy bills and a
            cleaner, greener environment.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Solar;
