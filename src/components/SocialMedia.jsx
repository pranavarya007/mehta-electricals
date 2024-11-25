import Link from "next/link";
import clsx from "clsx";
import {
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/company/mehta-electricals-and-communication/",
    icon: BsLinkedin,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/mehta_electrical_communication?igsh=MXF1aWR1NmYzZXVpbg%3D%3D&utm_source=qr",
    icon: BsInstagram,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
