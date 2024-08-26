import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import image from "../../../public/game1.jpg";

const Pgcards = () => {

  const titles = [
    "GOD OF WAR 3",
    "GOD OF WAR 4",
    "GOD OF WAR 5",
    "GOD OF WAR 6",
    "GOD OF WAR 7"
  ];

  const generateHref = (title) => `/GamesDetails/${encodeURIComponent(title)}`;

  return (
    <section className='p-2 w-full flex flex-wrap justify-center gap-y-5 h-auto my-1'>
      {[...Array(1)].map((_, sectionIndex) => (
        <article key={sectionIndex} className='flex flex-wrap justify-center gap-4 md:gap-8'>
          {titles.map((title, index) => (
            <Link key={index} href={generateHref(title)}>
              <div className="card max-w-[200px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] flex flex-col items-center">
                <Image
                  src={image}
                  alt={`Game ${index + 1}`}
                  className="w-full h-auto rounded-md"
                />
                <p className="heading text-center mt-2">
                  {title}
                </p>
                <p className="text-center">
                  (______-----_____)
                </p>
                <p className="text-center">
                  ----
                </p>
              </div>
            </Link>
          ))}
        </article>
      ))}
      <div>
      <article className='flex flex-wrap justify-center gap-4 md:gap-8'>
          {titles.map((title, index) => (
            <Link key={index} href={generateHref(title)}>
              <div className="card max-w-[200px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] flex flex-col items-center">
                <Image
                  src={image}
                  alt={`Game ${index + 1}`}
                  className="w-full h-auto rounded-md"
                />
                <p className="heading text-center mt-2">
                  {title}
                </p>
                <p className="text-center">
                  (______-----_____)
                </p>
                <p className="text-center">
                  ----
                </p>
              </div>
            </Link>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Pgcards;
