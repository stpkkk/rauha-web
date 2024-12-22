// import { PencilSquareIcon } from "@heroicons/react/24/solid";
// import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
// import DeleteReservation from "./DeleteReservation";
import { BookingType } from "../_types/booking";
// import Image from 'next/image'

type ReservationCard = {
  booking: BookingType;
};

// export const formatDistanceFromNow = (date: string | Date) =>
//   formatDistance(typeof date === "string" ? parseISO(date) : date, new Date(), {
//     addSuffix: true,
//   }).replace("about ", "");

// function ReservationCard({ booking }: ReservationCard) {
//   const {
//     // id,
//     // guestId,
//     // startDate,
//     // endDate,
//     // numNights,
//     // totalPrice,
//     // numGuests,
//     // status,
//     // created_at,
//     // cabins: { name, image },
//   } = booking;

//   return (
//     <div className="flex border border-primary-800">
//       <div className="relative aspect-square h-32">
//         <Image
//           src={image}
//           alt={`Домик ${name}`}
//           className="border-r border-primary-800 object-cover"
//         />
//       </div>

//       <div className="flex flex-grow flex-col px-6 py-3">
//         <div className="flex items-center justify-between">
//           <h3 className="text-xl font-semibold">
//             {numNights} ночей в домике {name}
//           </h3>
//           {isPast(new Date(startDate)) ? (
//             <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200">
//               past
//             </span>
//           ) : (
//             <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200">
//               upcoming
//             </span>
//           )}
//         </div>

//         {/* <p className="text-lg text-primary-300">
//           {format(new Date(startDate), "EEE, MMM dd yyyy")} (
//           {isToday(new Date(startDate))
//             ? "Сегодня"
//             : formatDistanceFromNow(startDate)}
//           ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
//         </p> */}

//         <div className="mt-auto flex items-baseline gap-5">
//           <p className="text-xl font-semibold text-accent-400">
//             {totalPrice}руб.
//           </p>
//           <p className="text-primary-300">&bull;</p>
//           <p className="text-lg text-primary-300">
//             {numGuests} гость{numGuests > 1 && "s"}
//           </p>
//           {/* <p className="ml-auto text-sm text-primary-400">
//             Забронировано {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
//           </p> */}
//         </div>
//       </div>

//       <div className="flex w-[100px] flex-col border-l border-primary-800">
//         <a
//           href={`/account/reservations/edit/${id}`}
//           className="group flex flex-grow items-center gap-2 border-b border-primary-800 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
//         >
//           <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
//           <span className="mt-1">Редактировать</span>
//         </a>
//         <DeleteReservation bookingId={id} />
//       </div>
//     </div>
//   );
// }

// export default ReservationCard;
const ReservationCard = ({ booking = {} }) => {
  return <div>ReservationCard</div>;
};
export default ReservationCard;
