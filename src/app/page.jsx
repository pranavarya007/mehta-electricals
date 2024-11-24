import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import DottedImageCarousel from "@/components/DottedImageCarousel";
//import logoLiciousDark from "@/public/images/logos/licious-logo-dark.svg";


const heroImages = [
  "/images/mehtaElectrical/14.jpg",
  "/images/mehtaElectrical/33.jpg",
  "/images/mehtaElectrical/16.jpg",
  "/images/mehtaElectrical/29.jpg",
  "/images/mehtaElectrical/34.jpg",
  "/images/mehtaElectrical/15.jpg",
  "/images/mehtaElectrical/31.jpg",
  // Add more image URLs as needed
];

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero Section with background image */}

      <section className="relative -mt-32 pt-32 py-24 sm:py-32 ">
        <div className="absolute inset-0 top-0">
          <div className="relative w-full h-full">
            {/* Blurred background */}
            {/*<div
            //   className="absolute inset-0 bg-[url('/images/mehtaElectrical/15.jpg')] bg-cover bg-center blur-sm"
            //   style={{ filter: "blur(4px)" }}
            // ></div>

            {/* Dark overlay */}
            <DottedImageCarousel images={heroImages} />
            <div className="absolute inset-0 bg-black/40 w-full h-[100vh]"></div>
          </div>
        </div>

        <Container className="relative z-20 mt-24 sm:mt-32">
          <FadeIn className="max-w-3xl">
            <h1 className="font-calluna font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-7xl">
              Expert Electrical Services Tailored to Your Needs !
            </h1>
            <p className="mt-6 text-lg text-neutral-300">
              {" "}
              <strong className="font-semibold text-white">
                Mehta Electrical & Communication
              </strong>{" "}
              is an ISO 9001-2008 Certified &quot;A&quot; class Electrical
              Contractor, operating under License No. H-587/22, granted by the
              Haryana Government unser rule 45 of the Indian Electricity Rules,
              1956. With a history dating back to 2006, we have become a trusted
              name in the industry, providing comprehensive electrical solutions
              to a diverse clientele.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: "Licious",
          logo: "/images/logos/licious-logo-dark.svg",

          logoClass: "h-14 w-auto",
        }}
      >
        Working with Mehta Electricals has been an absolute game-changer for our
        operations. Their team&apos;s dedication to precision, reliability, and
        on-time delivery has set a new standard for our expectations from
        contractors. From initial consultation to the final installation, their
        expertise in handling high-demand projects shone through every step.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
