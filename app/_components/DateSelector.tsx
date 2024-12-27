"use client";

import { useState } from "react";
// import { isWithinInterval } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CabinType } from "../_types/cabin";
import { SettingType } from "../_types/setting";

// function isAlreadyBooked(range: DateRange | undefined, datesArr: Date[]) {
//   return (
//     range?.from &&
//     range?.to &&
//     datesArr.some((date) =>
//       isWithinInterval(date, { start: range.from!, end: range.to! }),
//     )
//   );
// }

type DateSelector = {
  settings: SettingType;
  bookedDays: Date[] | number;
  cabin: CabinType;
};

function DateSelector({
  settings,
  bookedDays = [new Date()],
  cabin = {
    id: "",
    name: "",
    maxCapacity: 0,
    regularPrice: 0,
    discount: 0,
    image: "",
    description: "",
  },
}: DateSelector) {
  const [range, setRange] = useState<DateRange | undefined>();

  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights =
    range?.from && range?.to
      ? Math.round(
          (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  const resetRange = () => {
    setRange(undefined);
  };

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="place-self-center pt-12"
        mode="range"
        selected={range}
        onSelect={setRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      <div className="flex h-[72px] items-center justify-between bg-accent-500 px-8 text-primary-800">
        <div className="flex items-baseline gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="font-semibold text-primary-700 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights > 0 ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 px-4 py-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
