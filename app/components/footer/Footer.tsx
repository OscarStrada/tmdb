import Image from "next/image";
import React from "react";

const Footer = () => {
  const imageUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div
      className="
        container 
        w-full 
        pt-12
        pb-8 
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-12
      "
    >
      <Image
        src={`${imageUrl}/logo.svg`}
        alt="The movie database logo"
        width={120}
        height={100}
      />

      <div className="flex justify-between items-center w-full text-sm">
        <span>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            className="hover:underline"
          >
            The movie database,
          </a>
          {""} all rights reserved
        </span>

        <span>
          Powered by {""}
          <a
            href="https://github.com/OscarStrada/tmdb"
            target="_blank"
            className="hover:underline"
          >
            Oscar Estrada
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
