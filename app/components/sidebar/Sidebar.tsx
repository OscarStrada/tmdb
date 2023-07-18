"use client";

import SideItem from "./SideItem";
import { formatCurrency } from "@/utils/formats";
import { LinkIcon } from "./LinkIcon";
import { Keyword } from "./Keyword";

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
  status: string;
  original_language: string;
  budget: number;
  revenue: number;
  homepage: string;
  // Add more properties if required
}

interface Props {
  movie: any;
}

const Sidebar = ({ movie }: Props) => {
  const budget = formatCurrency(movie?.budget ?? 0, "en-US", "USD");
  const revenue = formatCurrency(movie?.revenue ?? 0, "en-US", "USD");

  return (
    <div className="w-1/4 py-10 pl-8 flex flex-col gap-10">
      <div className="flex gap-4">
        <LinkIcon />
        <LinkIcon />
        <LinkIcon />
        <LinkIcon />
      </div>

      <div className="flex flex-col gap-5">
        <SideItem title="Status" data={movie?.status} />
        <SideItem title="Original Language" data={movie?.original_language} />
        <SideItem title="Budget" data={budget} />
        <SideItem title="Revenue" data={revenue} />
        <Keyword title="Keywords" keywords={movie.keywords.keywords} />
      </div>

      <hr />

      <div className="flex flex-col gap-5">
        <div>
          <h3 className="font-semibold pb-2">Content score</h3>
          <div className="bg-slate-100 dark:bg-popover rounded-md font-semibold px-4 py-2">
            100
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
