"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  formatRuntime,
  getReleaseYear,
  getScoreInPercentage,
} from "@/utils/formats";
import { CircularLoader } from "@/app/components";

interface Params {
  id: string;
}

type Genre = {
  id: number;
  name: string;
};

interface MovieDetails {
  id: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  runtime: number;
  genres: Genre[];
  tagline: string;
  // Add more properties if required
}

const MovieDetails = ({ params }: { params: Params }) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";
  const releaseYear = getReleaseYear(movieDetails?.release_date);
  const runtime = movieDetails ? formatRuntime(movieDetails.runtime) : "";
  const userScore = getScoreInPercentage(movieDetails?.vote_average);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const api_key = `api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`;
      const url = `${baseUrl}/movie/${params.id}?${api_key}`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          // Do something with the data
          setMovieDetails(data);
        } else {
          // Handle the error if the response is not okay
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    console.log(movieDetails);

    fetchData();
  }, [params, movieDetails]);

  return (
    <div>
      <div className="w-full min-h-screen md:min-h-[500px] md:h-[500px] relative aspect-video">
        <Image
          src={`${baseImageUrl}/${movieDetails?.backdrop_path}`}
          alt={`backdrop ${movieDetails?.original_title}`}
          fill
          className="object-cover object-top w-full h-full"
        />

        <div className="absolute flex flex-col md:flex-row gap-10 w-full h-full inset-0 bg-black/80 container py-10 md:py-8">
          <div className="relative h-full w-full md:w-[420px]">
            <Image
              src={`${baseImageUrl}/${movieDetails?.poster_path}`}
              alt={`poster image ${movieDetails?.original_title}`}
              fill
              className="object-cover object-top w-full h-full rounded-md"
            />
          </div>

          <div className="w-full flex flex-col gap-7 md:gap-5 justify-center text-white">
            <div>
              <h1 className="text-3xl font-semibold pb-2">
                {movieDetails?.original_title} {""}
                <span className="font-light hidden md:block">{`(${releaseYear})`}</span>
              </h1>

              <div className="flex gap-4 text-sm font-medium">
                <div className="flex gap-2">
                  <div className="border dark:border-white px-2">PG-13</div>
                  <p>{movieDetails?.release_date}</p>
                </div>
                <ul className="flex gap-1">
                  {movieDetails?.genres.map((genre) => (
                    <li key={genre.id}>{genre.name},</li>
                  ))}
                </ul>
                <span>{runtime}</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <CircularLoader score={userScore} width="70" fontSize={"18"} />
              <span>User score</span>
            </div>

            <div>
              <i className="opacity-80">{movieDetails?.tagline}</i>
              <h2 className="text-xl font-semibold py-2">Overview</h2>
              <p className="font-medium">{movieDetails?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
