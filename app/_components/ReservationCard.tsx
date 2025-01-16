import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import DeleteReservation from "./DeleteReservation";
import { BookingType } from "../_types/booking";
import Image from "next/image";
import Link from "next/link";

type ReservationCardProps = {
  booking: BookingType;
  onDelete: (bookingId: number) => void;
};

export const formatDistanceFromNow = (date: string | Date) =>
  formatDistance(typeof date === "string" ? parseISO(date) : date, new Date(), {
    addSuffix: true,
    locale: ru,
  }).replace("около ", "");

export default function ReservationCard({
  booking,
  onDelete,
}: ReservationCardProps) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins,
  } = booking;

  // Handle both array and object cases for cabins
  const cabin = Array.isArray(cabins) ? cabins[0] : cabins;
  const { name, image } = cabin || { name: "", image: "" };

  return (
    <div className="flex border border-primary-800">
      <div className="relative aspect-square h-32">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`Домик ${name}`}
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col px-6 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights}{" "}
            {numNights === 1 ? "ночь" : numNights < 5 ? "ночи" : "ночей"} в
            домике {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200">
              прошедшее
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200">
              предстоящее
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(startDate), "d MMMM yyyy 'г.'", { locale: ru })} (
          {isToday(new Date(startDate))
            ? "Сегодня"
            : formatDistanceFromNow(startDate)}
          ) &mdash;{" "}
          {format(new Date(endDate), "d MMMM yyyy 'г.'", { locale: ru })}
        </p>

        <div className="mt-auto flex items-baseline gap-5">
          <p className="text-xl font-semibold text-accent-400">
            {totalPrice} руб.
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">
            {numGuests} {numGuests === 1 ? "гость" : "гостя"}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            Забронировано{" "}
            {format(new Date(created_at), "d MMMM yyyy 'г.', HH:mm", {
              locale: ru,
            })}
          </p>
        </div>
      </div>

      <div className="flex w-[170px] flex-col border-l border-primary-800">
        {!isPast(new Date(startDate)) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex flex-grow items-center gap-2 border-b border-primary-800 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
              <span className="mt-1">Редактировать</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}
