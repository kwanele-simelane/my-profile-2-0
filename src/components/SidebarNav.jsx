import React, { useState } from "react";

const links = [
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
];

const SidebarNav = () => {
  const [active, setActive] = useState("#about"); // Set a default active link
  return (
    <nav className="flex flex-col gap-2.5 pl-10">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={() => setActive(link.href)}
          className={`group flex items-center gap-2 text-text font-normal text-base no-underline cursor-pointer transition-colors duration-300 hover:!text-primary
            ${active === link.href ? "!text-primary" : ""}`}>
          <span
            className={`block h-px bg-primary rounded-sm transition-all duration-300
              ${
                active === link.href ? "w-16" : "w-10 group-hover:!w-16"
              }`}></span>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;
