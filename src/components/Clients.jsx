import Image from "next/image";

//import logoAdani from "../images/logos/adani-group-vector-logo.svg";
//import logoAmeya from "../images/logos/ameya-group.svg";
//import logoCoke from "../images/logos/Coca-Cola.svg";
//import logoDevyani from "../images/logos/devyani_logo.svg";
//import logoGentari from "../images/logos/gentari-icon-stacked.svg";
//import logoIntRealEst from "../images/logos/Intelligent-Real-Estat.svg";
//import logoLenskart from "../images/logos/lenskart-logo.svg";
//import logoLicious from "../images/logos/licious-logo.svg";
//import logoValueFirst from "../images/logos/value-first.svg";
//import logoVatika from "../images/logos/vatika.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Adani", "/images/logos/adani-group-vector-logo.svg"],
  ["Ameya", "/images/logos/ameya-group.svg"],
  ["Coke", "/images/logos/Coca-Cola.svg"],
  ["Devyani", "/images/logos/devyani_logo.svg"],
  ["Gentari", "/images/logos/gentari-icon-stacked.svg"],
  ["IntRealEst", "/images/logos/Intelligent-Real-Estat.svg"],
  ["Lenskart", "/images/logos/lenskart-logo.svg"],
  ["Licious", "/images/logos/licious-logo.svg"],
];

const Clients = () => {
  return (
    <div className="rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-[300px]">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with hundreds of amazing clients
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    unoptimized
                    width={200} // Image width
                    height={100} // Image height
                    className="max-h-16 w-auto"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
