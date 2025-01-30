import Image from "next/image";
import bg from "@/public/assets/images/bg.jpg";
import { getCabins } from "./_lib/data-service";
import Accordion from "./_components/Accordion";
import About from "./_components/About";

export default async function HomePage() {
  const cabins = await getCabins();
  const cabinsAmount = cabins.length;

  return (
    <div className="flex flex-col gap-10">
      <div className="relative flex h-screen w-full justify-center text-center">
        <Image
          src={bg}
          fill
          sizes="100vw"
          placeholder="blur"
          quality={60}
          className="object-cover"
          alt="Домик в лесу"
        />
        <h1 className="absolute mx-auto mb-12 mt-52 max-w-7xl p-4 text-6xl font-normal tracking-tight text-primary-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-8xl">
          Уютные домики в сердце <span className="font-bold">Карелии</span>, на
          берегу озера!
        </h1>
      </div>

      <About cabinsAmount={cabinsAmount} />
      <Accordion />
    </div>
  );
}
