"use client"

import React, {useState} from "react";
import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/logo.png"
import { MdHome } from "react-icons/md"; 
import { GiConsoleController } from "react-icons/gi"; 
import { GiWorld } from "react-icons/gi"; 
import { GoSignIn } from "react-icons/go"; 

const sideMenu = () => {

  return (
    <section className='sha w-16 flex flex-col text-center h-[99vh] justify-between p-2 rounded-xl'>
      <div className='w-12 h-12'>
        <Image
         src={Logo}
         alt="logo"
         className="w-full h-full cursor-pointer rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-7">
        <Link 
          href="/"
          className="hover:text-gray-400"
        >
          <MdHome size={40}/>
        </Link>
        <Link
          href="/games"
          className="hover:text-gray-400"
        >
          <GiConsoleController size={40}/>
        </Link>
        <Link
          href="sign-in"
        >
          <GoSignIn size={40} className="hover:text-gray-400"/>
        </Link>
      </div>
      <div>
        <p>
          <GiWorld size={40}/>
        </p>
      </div>
    </section>
  )
}

export default sideMenu;