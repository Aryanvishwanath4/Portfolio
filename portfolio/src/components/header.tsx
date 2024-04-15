"use client";

import { links } from "@/lib/data";
import clsx from "clsx";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [offset, setOffset] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const newOffset = window.innerHeight / 2;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSetActive = (to: any) => {
      setActiveLink(to);
    };

    window.addEventListener("scroll", handleSetActive);

    return () => {
      window.removeEventListener("scroll", handleSetActive);
    };
  }, []);

  return (
    <header className="z-[999] relative">
      <div className="flex justify-center">
        <nav className="fixed border bg-slate-400 rounded-full py-2 sm:top-[1.7rem] sm:py-0">
          <ul className="flex w-[22rem] text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap">
            {links.map((link) => (
              <Link
                to={link.name}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  activeLink === link.name ? "bg-slate-600 rounded-full" : ""
                )}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => setActiveLink(link.name)}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
