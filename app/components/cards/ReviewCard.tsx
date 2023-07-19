"use client";

import { formatDate } from "@/utils/formats";
import Image from "next/image";
import { useState } from "react";

interface Props {
  review: any;
  movieTitle: string;
}

const ReviewCard = ({ review, movieTitle }: Props) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const baseImageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;
  const defaultProfilePhoto = `${process.env.NEXT_PUBLIC_BASE_URL}/empty-profile.webp`;
  const createdAt = formatDate(review?.created_at);

  const handleClick = () => {
    setShowFullContent(!showFullContent);
  };

  const stripHTMLTags = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const contentText = stripHTMLTags(review?.content);
  const words = contentText.split(" ");
  const displayedContent = showFullContent
    ? contentText
    : words.slice(0, 100).join(" ");

  if (!review) {
    return <p>{`We don't have any reviews for ${movieTitle}`}</p>;
  }

  return (
    <div className="w-full rounded-md bg-muted dark:bg-popover flex gap-5 px-6 py-8">
      <div className="w-16 h-16 relative rounded-full">
        <Image
          src={
            review.author_details?.avatar_path
              ? `${baseImageUrl}/${review.author_details.avatar_path}`
              : defaultProfilePhoto
          }
          alt={`${review.author} profile`}
          fill
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        <div>
          <h4 className="text-xl font-semibold">A review by {review.author}</h4>
          <h5 className="text-sm font-light">
            Written by <span className="font-semibold">{review.author}</span> on{" "}
            {createdAt}
          </h5>
        </div>

        <div
          className="text-sm whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: displayedContent }}
        ></div>

        {words.length > 100 && (
          <button
            className="text-blue-500 text-right text-sm"
            onClick={handleClick}
          >
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
