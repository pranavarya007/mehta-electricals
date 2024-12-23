import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Transformers", href: "/blog/transformers" },
      { title: "HT & LT Panels", href: "/blog/ht-lt-panels" },
      { title: "Solar", href: "/blog/solar" },
      { title: "Electronic Meters", href: "/blog/electronic-meters" },
      { title: "Cabel Joining Kits", href: "/blog/cable-joining-kits" },
      {
        title: "Supply Installation Testing & Commissioning (SITC)",
        href: "/blog/sitc",
      },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
