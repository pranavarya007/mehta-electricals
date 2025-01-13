"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

const Container = ({ as: Component = "div", className, children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const invert = false
  return (
    <Component
      isHomePage={isHomePage}
      invert={invert}
      className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}
    >
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;
