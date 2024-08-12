"use client"

import React, { useState, useEffect } from 'react';
import { FaWifi } from "react-icons/fa";
import { CiWifiOff } from "react-icons/ci";

const Topbar = () => {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    setIsOnline(navigator.onLine);

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
    <section id='sha-2' className='w-full h-16 justify-between p-4 flex border-2 border-none rounded-xl'>
      <div className='block md:block sm:hidden' id='block'>
        BLACK-ARCH GAMING
      </div>
      <div className='hidden md:hidden sm:block' id='hidden'>
        B-A-G
      </div>
      <div className="flex items-center" id="status">
        {isOnline === null ? (
          <div className="flex items-center gap-2">
            <p>Checking status...</p>
          </div>
        ) : isOnline ? (
          <div className="flex items-center gap-2">
            <FaWifi className="text-green-500" />
            <p>Online</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <CiWifiOff className="text-red-500" />
            <p>Offline</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Topbar;
