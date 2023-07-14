import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: Props) => {
  const baseUrl = "http://localhost:3000";

  return (
    <section className="bg-cyan-800 w-full relative h-72">
      <Image
        src={`${baseUrl}/hero.jpg`}
        alt="Marvel wallpaper"
        fill
        className="aspect-auto object-cover object-top mix-blend-overlay"
      />

      <div className="container flex flex-col justify-center gap-2 w-full h-full">
        <h1 className="text-white text-5xl font-semibold">{title}</h1>
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          {subtitle}
        </h2>
      </div>
    </section>
  );
};
