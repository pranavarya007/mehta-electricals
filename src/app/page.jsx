import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoLiciousDark from "@/images/logos/licious-logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Expert Electrical Services Tailored to Your Needs !
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            {" "}
            <strong className="font-semibold text-neutral-950">
              Mehta Electrical & Communication
            </strong>{" "}
            is an ISO 9001-2008 Certified "A" class Electrical Contractor,
            operating under License No. H-587/22, granted by the Haryana
            Government unser rule 45 of the Indian Electricity Rules, 1956. With
            a history dating back to 2006, we have become a trusted name in the
            industry, providing comprehensive electrical solutions to a diverse
            clientele.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: "Licious",
          logo: logoLiciousDark,
          logoClass: "h-14 w-auto",
        }}
      >
        Working with Mehta Electricals has been an absolute game-changer for our
        operations. Their team’s dedication to precision, reliability, and
        on-time delivery has set a new standard for our expectations from
        contractors. From initial consultation to the final installation, their
        expertise in handling high-demand projects shone through every step.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
