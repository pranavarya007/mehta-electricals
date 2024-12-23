"use client";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import { useState, useEffect } from "react";
import SolarNotification from "@/components/AnimatedSolarNotification";

// Optimized Image Carousel Component
const OptimizedImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[100vh]">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Mehta Electrical Services ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIiIR0hISEhISEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="object-cover"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      ))}

      {/* Optional: Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse">Loading...</div>
        </div>
      )}

      {/* Optional: Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Optimized hero images with different sizes
const heroImages = [
  {
    src: "/images/mehtaElectrical/14.jpg",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/mehtaElectrical/33.jpg",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/mehtaElectrical/30.jpg",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/mehtaElectrical/29.jpg",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/mehtaElectrical/31.jpg",
    width: 1920,
    height: 1080,
  },
];

export default function Home() {
  return (
    <main className="text-black">
      <SolarNotification />
      <section className="relative -mt-32 pt-32 py-24 sm:py-32 mb-16 w-full h-[100vh]">
        <div className="absolute inset-0 top-0">
          <OptimizedImageCarousel images={heroImages.map((img) => img.src)} />
          <div className="absolute inset-0 bg-black/70 w-full h-[100vh]"></div>
        </div>

        <Container className="relative z-20 mt-24 sm:mt-32">
          <FadeIn className="max-w-3xl">
            <h1 className="font-calluna text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-7xl">
              Expert Electrical Services Tailored to Your Needs!
            </h1>
            <p className="mt-6 text-lg text-neutral-300">
              <strong className="font-semibold text-white">
                Mehta Electrical & Communication
              </strong>{" "}
              is an ISO 9001-2008 Certified &quot;A&quot; class Electrical
              Contractor, operating under License No. H-587/22, granted by the
              Haryana Government under rule 45 of the Indian Electricity Rules,
              1956. With a history dating back to 2006, we have become a trusted
              name in the industry, providing comprehensive electrical solutions
              to a diverse clientele.
            </p>
          </FadeIn>
        </Container>
      </section>
      <Services />
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

      <ContactSection />
    </main>
  );
}
