import Image from "next/image";
import bg from "@/public/assets/images/bg.jpg";

export default function HomePage() {
  return (
    <div className="mt-52">
      <Image
        src={bg}
        fill
        sizes="100vw"
        placeholder="blur"
        quality={60}
        className="object-cover object-center"
        alt="Домик в лесу"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-12 text-8xl font-normal tracking-tight text-primary-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Уютные домики в сердце <span className="font-bold">Карелии</span>, на
          берегу озера!
        </h1>
        {/* <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Домики
        </Link> */}
      </div>
    </div>
  );
}
