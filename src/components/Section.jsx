import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

const Section = ({
  title,
  image = null,
  showImage = true,
  children,
  forceLeftAlign = false, // New prop to control layout
}) => {
  return (
    <Container
      className={`group/section [counter-increment:section] ${
        forceLeftAlign ? "force-left" : ""
      }`}
    >
      <div className={montserrat.className}>
        <div
          className={`
          lg:flex lg:items-center lg:gap-x-8 xl:gap-x-20
          ${
            forceLeftAlign
              ? "lg:justify-start"
              : "lg:justify-end lg:group-even/section:justify-start"
          }
        `}
        >
          {showImage && image && (
            <div className="flex justify-center">
              <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                <StylizedImage
                  {...image}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className={`
                    justify-center 
                    ${
                      forceLeftAlign
                        ? "lg:justify-start"
                        : "lg:justify-end lg:group-even/section:justify-start"
                    }
                  `}
                />
              </FadeIn>
            </div>
          )}
          <div
            className={`
            mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none
            ${forceLeftAlign ? "" : "lg:group-even/section:order-first"}
          `}
          >
            <FadeIn>
              <div
                className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                aria-hidden="true"
              />
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section;
