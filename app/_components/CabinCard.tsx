import { UsersIcon } from "@heroicons/react/24/solid";
import { CabinType } from '../_types/cabin'
import Image from 'next/image'
import Link from 'next/link'

type CabinCardProps = {
	cabin: CabinType
}

function CabinCard({ cabin }:CabinCardProps) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border border-primary-800">
      <div className="relative flex-1">
        <Image
          src={image}
          alt={`Домик ${name}`}
          fill
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex-grow">
        <div className="bg-primary-950 px-7 pb-4 pt-5">
          <h3 className="mb-3 text-2xl font-semibold text-accent-500">
            Домик {name}
          </h3>

          <div className="mb-2 flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              На <span className="font-bold">{maxCapacity}</span> гостей
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-3">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  {regularPrice - discount}руб.
                </span>
                <span className="font-semibold text-primary-600 line-through">
                  {regularPrice}руб.
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">{regularPrice}руб.</span>
            )}
            <span className="text-primary-200">/ночь</span>
          </p>
        </div>

        <div className="border-t border-t-primary-800 bg-primary-950 text-right">
          <Link
            href={`/cabins/${id}`}
            className="inline-block border-l border-primary-800 px-6 py-4 transition-all hover:bg-accent-600 hover:text-primary-900"
          >
            Забронировать &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;