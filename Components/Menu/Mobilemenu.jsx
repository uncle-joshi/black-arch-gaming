"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import { links } from "../../Data/links";
import Link from 'next/link';


const Mobilemenu = () => {
    const pathname = usePathname();

  return (
    <section className='w-full h-16 p-2 side-menu sha-2 rounded-t-3xl'>
        <div className='flex justify-between'>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`items-center text-center w-auto hover:text-gray-300 transition border-b-2 border-transparent hover:border-[#f51524] 
              ${pathname === link.href ? "" : "border-transparent"
              }`}
          >
            <link.icon size={50} className="text-white p-1" />
          </Link>
        ))}
        </div>
    </section>
  )
}

export default Mobilemenu;