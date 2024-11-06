import Image from "next/image";

import logoAdani from "../images/logos/adani-group-vector-logo.svg";
import logoAmeya from "../images/logos/ameya-group.svg";
import logoCoke from "../images/logos/Coca-Cola.svg";
import logoDevyani from "../images/logos/devyani_logo.svg";
import logoGentari from "../images/logos/gentari-icon-stacked.svg";
import logoIntRealEst from "../images/logos/Intelligent-Real-Estat.svg";
import logoLenskart from "../images/logos/lenskart-logo.svg";
import logoLicious from "../images/logos/licious-logo.svg";
import logoValueFirst from "../images/logos/value-first.svg";
import logoVatika from "../images/logos/vatika.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Adani", logoAdani],
  ["Ameya", logoAmeya],
  ["Coke", logoCoke],
  ["Devyani", logoDevyani],
  ["Gentari", logoGentari],
  ["IntRealEst", logoIntRealEst],
  ["Lenskart", logoLenskart],
  ["Licious", logoLicious],
  
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
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
