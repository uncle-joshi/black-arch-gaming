"use client"

import React, {useState, useEffect} from 'react'
import { FaWifi, FaWifiSlash } from "react-icons/fa"; 

const Topbar = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateStatus = () => {
          setIsOnline(navigator.onLine);
        };
    
        window.addEventListener("online", updateStatus);
        window.addEventListener("offline", updateStatus);
    
        return () => {
          window.removeEventListener("online", updateStatus);
          window.removeEventListener("offline", updateStatus);
        };
      }, []);
      

  return (
    <section className='w-full h-16 justify-between p-4 flex border-2 border-[#f51524] rounded-xl'>
        <div className='block md:block sm:hidden' id='block'>
            BLACK-ARCH GAMING
        </div>
        <div className='hidden md:hidden sm:block' id='hidden'>
                B-A-G
        </div>
        <div className="flex items-center" id="status">
          {isOnline ? (
            <div className="flex items-center gap-2">
              <FaWifi className="text-green-500" />
              <span>Online</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FaWifiSlash className="text-red-500" />
              <span>Offline</span>
            </div>
          )}
        </div>
    </section>
  )
}

export default Topbar