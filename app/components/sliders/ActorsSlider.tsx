"use client";

import { cn } from "@/lib/utils";
import { ActorCard } from "@/app/components";

interface Props {
  title: string;
  actors: any;
  className: string;
}

const ActorsSlider = ({ title, actors, className }: any) => {
  const baseImageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;
  const tenTopBilledCast = actors.slice(0, 10);
  const defaultProfilePhoto = `${process.env.NEXT_PUBLIC_BASE_URL}/empty-profile.webp`;

  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <h3 className="text-xl font-medium capitalize">{title}</h3>
      <div className="overflow-y-scroll scrollbar-hide">
        <div className="flex gap-6">
          {tenTopBilledCast?.map((actor: any) => (
            <ActorCard
              key={actor.id}
              id={actor.id}
              imageSrc={
                actor.profile_path
                  ? `${baseImageUrl}/${actor.profile_path}`
                  : defaultProfilePhoto
              }
              imageAlt={`${actor.original_name} photo`}
              originalName={actor.original_name}
              character={actor.character}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActorsSlider;
