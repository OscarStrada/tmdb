"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  person: any;
}

const Actor = ({ person }: Props) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const imageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;
  console.log(person.combined_credits);

  const handleClick = () => {
    setShowFullContent(!showFullContent);
  };

  const stripHTMLTags = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const contentText = stripHTMLTags(person?.biography);
  const words = contentText.split(" ");
  const displayedContent = showFullContent
    ? contentText
    : words.slice(0, 150).join(" ");
  return (
    <>
      {/* Photo */}
      <div className="w-72 h-[420px] bg-black rounded-md relative">
        <Image
          src={`${imageUrl}/${person.profile_path}`}
          alt={`${person.nam} photo`}
          fill
          className="aspect-square w-full h-full rounded-md"
        />
      </div>

      {/* Personal info */}
      <div className="flex-1 flex flex-col gap-8 whitespace-pre-line">
        <h1 className="text-3xl font-semibold">{person.name}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: displayedContent }}
          className="pr-5"
        ></p>
        {words.length > 150 && (
          <button
            className="text-blue-500 text-left text-sm"
            onClick={handleClick}
          >
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </>
  );
};

export default Actor;
