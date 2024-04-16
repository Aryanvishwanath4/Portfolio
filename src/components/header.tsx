"use client";

import { links } from "@/lib/data";
import clsx from "clsx";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="flex justify-center">
        <nav className="fixed border bg-gradient-to-br from-blue-800 via-indigo-600 to-purple-800 rounded-full py-2 sm:top-[1.7rem] sm:py-0">
          <ul className="flex w-[22rem] text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap">
            {links.map((link) => (
              <Link
                to={link.name}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                )}
                smooth={true}
                duration={500}
                spy={true}
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
