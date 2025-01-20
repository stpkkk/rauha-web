import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";
import { CabinType } from "../_types/cabin";

type CabinCardProps = {
  cabin: CabinType;
};

function CabinCard({ cabin }: CabinCardProps) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col border border-primary-800 sm:flex-row">
      <div className="relative aspect-[4/3] w-full sm:w-2/5">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Домик ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex w-full flex-col justify-between sm:w-3/5">
        <div className="bg-primary-900 px-4 py-4 sm:px-7 sm:py-5">
          <h3 className="mb-3 text-xl font-semibold text-accent-500 sm:text-2xl">
            Домик {name}
          </h3>

          <div className="mb-2 flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-base text-primary-200 sm:text-lg">
              На <span className="font-bold">{maxCapacity}</span> гостей
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-2 sm:gap-3">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-[350] sm:text-3xl">
                  {regularPrice - discount}руб.
                </span>
                <span className="text-sm font-semibold text-primary-600 line-through sm:text-base">
                  {regularPrice}руб.
                </span>
              </>
            ) : (
              <span className="text-2xl font-[350] sm:text-3xl">
                {regularPrice}руб.
              </span>
            )}
            <span className="text-sm text-primary-200 sm:text-base">/ночь</span>
          </p>
        </div>

        <div className="border-t border-t-primary-800 bg-primary-900 text-right">
          <Link
            href={`/cabins/${id}`}
            className="inline-block w-full border-t border-primary-800 px-4 py-3 transition-all hover:bg-accent-600 hover:text-primary-900 sm:w-auto sm:border-l sm:border-t-0 sm:px-6 sm:py-4"
          >
            Забронировать &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
