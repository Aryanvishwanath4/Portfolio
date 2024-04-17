"use client";

import { links } from "@/lib/data";
import clsx from "clsx";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="">
        <nav className="fixed w-full flex justify-center  top-[1.7rem] py-0">
          <ul className="flex w-auto text-[0.9rem] font-medium text-white border bg-gradient-to-br from-blue-800 via-indigo-600 to-purple-800 rounded-full">
            {links.map((link) => (
              <Link
                to={link.name}
                className={clsx(
                  "flex  items-center justify-center px-1 md:px-3 py-1 md:py-3 hover:text-gray-950 transition"
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
