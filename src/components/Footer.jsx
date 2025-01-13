import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  return (
    <form className="max-w-sm w-full px-4 sm:px-0">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

const Footer = () => {
  return (
    <>
      <Container
        as="footer"
        className="mt-16 sm:mt-24 lg:mt-32 w-full px-4 sm:px-0"
      >
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-16 lg:grid-cols-2">
            <FooterNavigation />
            <div className="flex justify-center lg:justify-end">
              <NewsletterForm />
            </div>
          </div>
          <div className="mb-10 md:mb-6 sm:mb-10 h-[100px] lg:h-0 mt-16 sm:mt-24 border-t border-neutral-950/10 pt-8 sm:pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-6 sm:gap-y-0">
              <Link
                href={"/"}
                aria-label="Home"
                className="flex justify-center md:justify-start"
              >
                <Logo className="h-6 sm:h-6 max-w-full" fillOnHover>
                  Mehta Electrical & Communication
                </Logo>
              </Link>
              <p className="text-xs pt-10 md:pt-0 sm:text-sm text-neutral-700 text-center sm:text-right">
                © Mehta Electrical & Communication. {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
      <div className="flex items-center justify-center mb-12 sm:mb-20 pt-4 md:pt-0 px-4">
        <Link href="https://github.com/pranavarya007" aria-label="Developer">
          <Logo className="text-xs sm:text-sm" fillOnHover>
            Developed by Goat Project{" "}
          </Logo>
        </Link>
      </div>
    </>
  );
};

export default Footer;
