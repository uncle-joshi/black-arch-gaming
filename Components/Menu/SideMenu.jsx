"use client"

import React, {useState} from "react";
import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/logo.png"

const sideMenu = () => {

  return (
    <section className='w-16 flex flex-col text-center h-[99vh] justify-between p-2 border-2 border-[#f51524] rounded-xl'>
      <div className='w-12 h-12'>
        <Image
         src={Logo}
         alt="logo"
         className="w-full h-full cursor-pointer rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-7">
        {/* Links like home games etc */}
        <Link 
          href="/"
        >
          H
        </Link>
        <Link
          href="/games"
        >
          G
        </Link>
      </div>
      <div>
        {/* sign in function  */}
        <Link
          href="sign-in"
        >
          Sign In
        </Link>
      </div>
    </section>
  )
}

export default sideMenu;