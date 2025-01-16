"use client";

import { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import SpinnerMini from "./SpinnerMini";

type DeleteReservationProps = {
  bookingId: number;
  onDelete: (bookingId: number) => void;
};

function DeleteReservation({ bookingId, onDelete }: DeleteReservationProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Вы уверены, что хотите удалить это бронирование?"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
          <span className="mt-1">Удалить</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
