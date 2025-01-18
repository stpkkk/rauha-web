"use client";

// import { isWithinInterval } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import {
  Day,
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
  Month,
} from "date-fns";
import "react-day-picker/dist/style.css";
import { CabinType } from "../_types/cabin";
import { SettingType } from "../_types/setting";
import { useReservation } from "./ReservationContext";

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

type DateSelector = {
  settings: SettingType;
  bookedDays: Date[] | number[];
  cabin: CabinType;
};

function DateSelector({ settings, bookedDays, cabin }: DateSelector) {
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDays) ? undefined : range;
  const { regularPrice, discount } = cabin;
  const numNights =
    displayRange?.from && displayRange?.to
      ? differenceInDays(displayRange?.to, displayRange?.from)
      : 0;
  const totalPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

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
        className="place-self-center pt-12 sm:py-6"
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
      <div className="flex h-[72px] items-center justify-between bg-accent-500 px-8 text-primary-800">
        <div className="flex items-baseline gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="">{regularPrice - discount}руб.</span>
                <span className="font-semibold text-primary-700 line-through">
                  {regularPrice}руб.
                </span>
              </>
            ) : (
              <span>{regularPrice}руб.</span>
            )}
            <span>/ночь</span>
          </p>
          {numNights > 0 ? (
            <>
              <p className="bg-accent-600 px-3 py-2">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Итого:</span>{" "}
                <span className="font-semibold">{totalPrice}руб.</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 px-4 py-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Сбросить
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
