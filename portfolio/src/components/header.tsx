"use client"

import { links } from '@/lib/data'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const Header =()=>{
    return(
        <header className="z-[999] relative">
            <nav className="flex fixed border border top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link)=> (
                        <Link className={clsx(
                            "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                          )} href={link.hash}>{link.name}</Link>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
export default Header;