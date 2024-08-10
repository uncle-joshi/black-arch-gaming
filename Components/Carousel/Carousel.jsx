'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  {
    src: '/game1.jpg',
    title: 'MAGIC SLIDER',
    type: 'FLOWER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio.',
  },
  {
    src: '/game2.jpg',
    title: 'MAGIC SLIDER',
    type: 'NATURE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio.',
  },
  {
    src: '/game3.jpeg',
    title: 'MAGIC SLIDER',
    type: 'PLANT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio.',
  },
  {
    src: '/game4.jpg',
    title: 'MAGIC SLIDER',
    type: 'NATURE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio.',
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-lg h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <Link
              href="/GamesDetails/1">
              <Image
                src={image.src}
                alt={image.title}
                width={1000}
                height={100}
                className="w-full h-full object-cover opacity-15"
              />
            </Link>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white space-y-4 text-center">
              <div className="text-5xl font-bold">{image.title}</div>
              <div className="text-5xl font-bold text-green-500">
                {image.type}
              </div>
              <div className="text-black text-xl font-bold max-w-md mx-auto">{image.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-24 h-32 cursor-pointer ${
              index === currentIndex
                ? 'border-2 border-green-500'
                : 'border border-white'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={images[index].src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}
      {/* 
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          className="bg-green-500 text-white w-10 h-10 rounded-full"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="bg-green-500 text-white w-10 h-10 rounded-full"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div> */}
    </div>
  );
}
