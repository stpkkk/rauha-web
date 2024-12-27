import Image from "next/image";
import { UsersIcon, MapPinIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { CabinType } from "../_types/cabin";

type CabinProps = {
  cabin: CabinType;
};

export default function Cabin({ cabin }: CabinProps) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="mb-24 grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 px-10 py-3">
      <div className="relative -translate-x-3 scale-[1.15]">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          alt={`Домик ${name}`}
        />
      </div>

      <div>
        <h3 className="mb-5 w-[150%] translate-x-[-254px] bg-primary-950 p-6 pb-1 text-7xl font-black text-accent-100">
          Домик {name}
        </h3>

        <p className="mb-10 text-lg text-primary-300">{description}</p>

        <ul className="mb-7 flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Для <span className="font-bold">{maxCapacity}</span> гостей
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Расположен в сердце <span className="font-bold">Карелии</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Конфиденциальность <span className="font-bold">100%</span>{" "}
              гарантирована
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
