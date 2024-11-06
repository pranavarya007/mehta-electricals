import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Transformers", href: "#" },
      { title: "HT & LT Panels", href: "#" },
      { title: "Solar", href: "/work/blog101" },
      { title: "Electronic Meters", href: "#" },
      { title: "Cabel Joining Kits", href: "#" },
      { title: "Supply Installation Testing & Commissioning (SITC)", href: "/work/blog101" },
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
