"use client";

import { User } from "next-auth";
import Image from "next/image";
import { useReservation } from "./ReservationContext";
import { CabinType } from "../_types/cabin";
import { createBooking } from "../_lib/actions";
import { differenceInDays } from "date-fns";
import { SubmitButton } from "./SubmitButton";

type ReservationFormType = {
  cabin: CabinType;
  user: User;
};

type BookingData = {
  startDate: Date | string;
  endDate: Date | string;
  cabinPrice: number;
  numNights: number;
  cabinId: string;
};

function ReservationForm({ cabin, user }: ReservationFormType) {
  const { range, resetRange } = useReservation();
  const startDate = range?.from || "";
  const endDate = range?.to || "";
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
  };

  //Pass bookingData from client to server action
  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
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
        className="flex flex-col gap-5 bg-primary-900 px-16 py-10 text-lg"
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
