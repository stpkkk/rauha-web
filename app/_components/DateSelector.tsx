"use client";

import { type DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";
import {
  type Day,
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
  type Month,
} from "date-fns";
import type { CabinType } from "../_types/cabin";
import type { SettingType } from "../_types/setting";
import { useReservation } from "./ReservationContext";
import SummaryPrice from "./SummaryPrice";

type DateSelector = {
  settings: SettingType;
  bookedDays: Date[] | number[];
  cabin: CabinType;
};

function isAlreadyBooked(
  range: DateRange | undefined,
  datesArr: Date[] | number[],
) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from!, end: range.to! }),
    )
  );
}

function DateSelector({ settings, bookedDays, cabin }: DateSelector) {
  const {
    startDate,
    endDate,
    range,
    setRange,
    resetRange,
    hasBreakfast,
    numGuests,
  } = useReservation();
  const { minBookingLength, maxBookingLength, breakfastPrice } = settings;

  const displayRange = isAlreadyBooked(range, bookedDays) ? undefined : range;
  const { regularPrice, discount } = cabin;
  const numNights =
    startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const breakfastTotal = hasBreakfast
    ? breakfastPrice * numNights * numGuests
    : 0;
  const roomTotal = numNights * (regularPrice - discount);
  const totalPrice = roomTotal + breakfastTotal;

  // Custom formatters for Russian localization
  const formatCaption = (month: Date) => {
    return (
      ru.localize?.month(month.getMonth() as Month, { width: "wide" }) +
      " " +
      month.getFullYear()
    );
  };

  const formatWeekdayName = (weekday: Date) => {
    return ru.localize?.day(weekday.getDay() as Day, { width: "short" });
  };

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="place-self-center py-12 sm:py-6"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        locale={ru}
        formatters={{ formatCaption, formatWeekdayName }}
        disabled={(curDate) =>
          isPast(curDate) || bookedDays.some((date) => isSameDay(date, curDate))
        }
      />

      {(startDate || endDate) && <ResetButton resetRange={resetRange} />}

      <SummaryPrice
        discount={discount}
        regularPrice={regularPrice}
        numNights={numNights}
        totalPrice={totalPrice}
        hasBreakfast={hasBreakfast}
      />
    </div>
  );
}

function ResetButton({ resetRange }: { resetRange: () => void }) {
  return (
    <div className="mb-10 flex h-[60px] items-center justify-center self-center">
      <button
        className="border border-primary-800 bg-accent-500 px-8 py-4 text-sm font-semibold text-primary-800 transition-all hover:bg-accent-600"
        onClick={resetRange}
      >
        Сбросить
      </button>
    </div>
  );
}

export default DateSelector;
