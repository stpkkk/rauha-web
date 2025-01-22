"use client";

import { User } from "next-auth";
import Image from "next/image";
import { differenceInDays } from "date-fns";
import { setLocalHoursToUTCOffset } from "../_helpers/setLocalHoursToUTCOffset";
import { CabinType } from "../_types/cabin";
import { createBooking } from "../_lib/actions";
import { useReservation } from "./ReservationContext";
import { SubmitButton } from "./SubmitButton";
import { Tooltip } from "./Tooltip";

type ReservationFormType = {
  cabin: CabinType;
  user: User;
};

type BookingData = {
  startDate?: Date | null;
  endDate?: Date | null;
  cabinPrice: number;
  numNights: number;
  cabinId: string;
  hasBreakfast: boolean;
};

function ReservationForm({ cabin, user }: ReservationFormType) {
  const { range, resetRange, setHasBreakfast, hasBreakfast } = useReservation();
  const startDate = setLocalHoursToUTCOffset(range?.from);
  const endDate = setLocalHoursToUTCOffset(range?.to);
  const { id, maxCapacity, regularPrice, discount } = cabin;
  const numNights =
    range?.from && range?.to ? differenceInDays(range?.to, range?.from) : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData: BookingData = {
    startDate,
    endDate,
    cabinPrice,
    numNights,
    cabinId: id,
    hasBreakfast,
  };

  //Pass bookingData from client to server action
  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01] bg-primary-900">
      <div className="flex items-center justify-between bg-primary-800 px-16 py-2 text-primary-300">
        <div className="relative h-8 w-8">
          <Image
            //referrerPolicy - Important to display google profile images
            referrerPolicy="no-referrer"
            className="rounded-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={user?.image || ""}
            alt={user?.name || "avatar"}
          />
        </div>
        <p>{user.name}</p>
      </div>

      <form
        // action={createBookingWithData}
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="flex flex-col gap-5 px-16 py-10"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">Сколько будет гостей?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option>Количество гостей...</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "гость" : "гостей"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <input
            className="h-5 w-5"
            type="checkbox"
            name="hasBreakfast"
            id="hasBreakfast"
            onChange={(e) => setHasBreakfast(e.target.checked)}
          />
          <label htmlFor="hasBreakfast">Добавить завтрак?</label>
          <Tooltip text="Завтрак включает в себя свежую выпечку, фрукты, яйца, кофе и чай. Подается с 7:00 до 10:00. Стоимость одного завтрака составляет 400руб." />
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
          {!(startDate && endDate) ? (
            <p className="text-base text-primary-300">Начните с выбора дат</p>
          ) : (
            <SubmitButton text="Забронировать" pendingText="Бронируем..." />
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
