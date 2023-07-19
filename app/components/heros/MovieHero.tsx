"use client";

import Image from "next/image";
import {
  formatRuntime,
  getReleaseYear,
  getScoreInPercentage,
} from "@/utils/formats";
import { CircularLoader } from "@/app/components";

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

// Todo: fix prop types
interface Props {
  movie: any;
}

const MovieHero = ({ movie }: Props) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const releaseYear = getReleaseYear(movie.release_date);
  const runtime = formatRuntime(movie.runtime);
  const userScore = getScoreInPercentage(movie.vote_average);

  return (
    <div className="w-full min-h-screen md:min-h-[500px] md:h-[500px] relative aspect-video">
      <Image
        src={`${baseImageUrl}/${movie.backdrop_path}`}
        alt={`backdrop ${movie.original_title}`}
        fill
        className="object-cover object-top w-full h-full"
      />

      <div className="absolute flex flex-col md:flex-row gap-10 w-full h-full inset-0 bg-black/80 container py-10 md:py-8">
        <div className="relative h-full w-full md:w-[420px]">
          <Image
            src={`${baseImageUrl}/${movie.poster_path}`}
            alt={`poster image ${movie.original_title}`}
            fill
            className="object-cover object-top w-full h-full rounded-md"
          />
        </div>

        <div className="w-full flex flex-col gap-7 md:gap-5 justify-center text-white">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold pb-2">
                {movie.original_title}
              </h1>
              <span className="text-xl font-light hidden md:block opacity-60">{`(${releaseYear})`}</span>
            </div>

            <div className="flex gap-2 text-sm font-medium">
              <div className="flex gap-2">
                <div className="border dark:border-white px-2 rounded-sm opacity-60">
                  PG-13
                </div>
                <p>{movie.release_date} |</p>
              </div>
              <ul className="flex gap-1">
                {movie.genres.map((genre: any, index: number) => (
                  <li key={genre.id}>
                    {genre.name}
                    {index !== movie.genres.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <span>| {runtime}</span>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <CircularLoader score={userScore} width="70" fontSize={"18"} />
            <span>User score</span>
          </div>

          <div>
            <i className="opacity-80">{movie.tagline}</i>
            <h2 className="text-xl font-semibold py-2">Overview</h2>
            <p className="font-medium">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
