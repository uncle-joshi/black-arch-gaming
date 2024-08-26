'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/Data/images';



export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to generate the dynamic href
  const generateHref = (title) => `/GamesDetails/${encodeURIComponent(title)}`;

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative rounded-lg h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={1000}
              height={100}
              className="w-full h-full object-fill md:object-cover opacity-35"
            />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white space-y-4 text-center">
              <Link
                href={generateHref(image.title)}
              >
                <div className="text-5xl font-bold textSize hover:underline underline-red-600 ">{image.title}</div>
              </Link>
              <div className="text-5xl font-bold text-green-500">
                {image.type}
              </div>
              <div className="text-white text-xl font-bold max-w-md mx-auto" id='block'>{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
