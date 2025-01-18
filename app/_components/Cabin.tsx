import Image from "next/image";
import { CabinType } from "../_types/cabin";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

type CabinProps = {
  cabin: CabinType;
};

export default function Cabin({ cabin }: CabinProps) {
  const { name, maxCapacity, image, description } = cabin;

  return (
    <article className="mb-8 overflow-hidden rounded-lg border border-primary-800 md:mb-16 lg:mb-24">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-64 md:h-auto md:w-2/5 lg:w-1/2">
          <Image
            src={image || "/placeholder.svg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            alt={`Домик ${name}`}
          />
        </div>

        <div className="w-full p-6 md:w-3/5 md:p-8 lg:w-1/2 lg:p-10">
          <div className="flex h-full flex-col">
            <h3 className="mb-4 w-[150%] rounded-lg bg-primary-950 p-4 pb-1 text-2xl font-black text-accent-100 sm:text-3xl md:mb-6 md:translate-x-[-254px] md:p-6 md:text-5xl lg:text-6xl">
              Домик {name}
            </h3>

            <p className="mb-6 text-base text-primary-300 md:mb-8 md:text-lg">
              <TextExpander>{description}</TextExpander>
            </p>

            <ul className="mt-auto space-y-3 md:space-y-4">
              <li className="flex items-center gap-3">
                <UsersIcon
                  className="h-5 w-5 text-primary-600"
                  aria-hidden="true"
                />
                <span className="text-base md:text-lg">
                  Для <span className="font-bold">{maxCapacity}</span> гостей
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon
                  className="h-5 w-5 text-primary-600"
                  aria-hidden="true"
                />
                <span className="text-base md:text-lg">
                  Расположен в сердце <span className="font-bold">Карелии</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <EyeSlashIcon
                  className="h-5 w-5 text-primary-600"
                  aria-hidden="true"
                />
                <span className="text-base md:text-lg">
                  Конфиденциальность <span className="font-bold">100%</span>{" "}
                  гарантирована
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
