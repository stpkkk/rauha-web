"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useReservation } from "./ReservationContext";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation();

  if (!range?.from || !range?.to) return null;

  return (
    <div className="text fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-8 rounded-full bg-accent-500 px-8 py-5 font-semibold text-primary-800 shadow-xl shadow-slate-900">
      <p>
        <span>👋</span> Не забудьте забронировать числа <br /> с{" "}
        {format(new Date(range.from), "d MMMM yyyy 'г.'", { locale: ru })} до{" "}
        {format(new Date(range.to), "d MMMM yyyy 'г.'", { locale: ru })}
      </p>
      <button
        onClick={resetRange}
        className="rounded-full p-1 transition-all hover:bg-accent-600"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
