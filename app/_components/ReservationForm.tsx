"use client";

import { CabinType } from "../_types/cabin";
import { useReservation } from "./ReservationContext";

type ReservationFormType = {
  cabin: CabinType;
};

function ReservationForm({ cabin }: ReservationFormType) {
  const { range } = useReservation();
  const { maxCapacity } = cabin;

  return (
    <div className="scale-[1.01]">
      <div className="flex items-center justify-between bg-primary-800 px-16 py-2 text-primary-300">
        <p>Пользователь</p>

        {/* <div className='flex gap-4 items-center'>
          <img
            // Important to display google profile images
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div> */}
      </div>

      <p>
        {String(range?.from) || ""} до {String(range?.to) || ""}
      </p>

      <form className="flex flex-col gap-5 bg-primary-900 px-16 py-10 text-lg">
        <div className="space-y-2">
          <label htmlFor="numGuests">Сколько будет гостей?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option value="" key="">
              Количество гостей...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "гость" : "гостей"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Что-нибудь, что мы должны знать о вашем пребывании?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            placeholder="Есть ли домашние животные, аллергия, особые требования и т. д.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-base text-primary-300">Начните с выбора дат</p>

          <button className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Забронировать
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
