"use client"

import React from "react";
import { usePathname } from "next/navigation";
import { links } from "../../Data/links";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import { GiWorld } from "react-icons/gi";

const SideMenu = () => {
  const pathname = usePathname();

  return (
    <section className="relative w-20 h-[94vh] flex flex-col items-center justify-between p-2 rounded-xl bg-black side-menu">
      <div className="w-12 h-12">
        <Image
          src={Logo}
          alt="logo"
          className="w-full h-full cursor-pointer rounded-full"
          sizes="30"
        />
      </div>
      <div className="flex flex-col gap-y-7">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`text-white transition border-b-2 border-transparent hover:border-[#f51524] ${
              pathname === link.href ? "border-red-600" : "border-transparent"
            }`}
          >
            <link.icon size={40} className="text-gray-400 p-1" />
          </Link>
        ))}
      </div>
      <div>
        <GiWorld size={40} />
      </div>
    </section>
  );
};

export default SideMenu;
