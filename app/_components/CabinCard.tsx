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
    <div className="flex border-primary-800 border">
      <Image
        src={image}
        alt={`Домик ${name}`}
        className="flex-1 border-r border-primary-800"
      />

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Домик {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              На <span className="font-bold">{maxCapacity}</span> гостей
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  {regularPrice - discount}руб.
                </span>
                <span className="line-through font-semibold text-primary-600">
                  {regularPrice}руб.
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">{regularPrice}руб.</span>
            )}
            <span className="text-primary-200">/ночь</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Подробности и бронирование &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;