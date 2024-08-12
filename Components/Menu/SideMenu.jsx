"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "./links";
import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/logo.png"
import { GiWorld } from "react-icons/gi";


const SideMenu = () => {

  const pathname = usePathname();

  return (
    <section id="sha-2" className='items-center w-20 flex flex-col text-center h-[94vh] justify-between p-2 rounded-xl'>
      <div className='w-12 h-12'>
        <Image
          src={Logo}
          alt="logo"
          className="w-full h-full cursor-pointer rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-7">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`items-center text-center w-auto hover:text-gray-300 transition border-b-2 border-transparent hover:border-[#f51524] 
              ${pathname === link.href ? "border-yellow-600" : "border-transparent"
              }`}
          >
            <link.icon size={40} className="text-gray-400 p-1" />
          </Link>
        ))}
      </div>
      <div>
        <p>
          <GiWorld size={40} />
        </p>
      </div>
    </section>
  )
}

export default SideMenu;
