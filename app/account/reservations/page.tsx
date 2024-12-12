import ReservationCard from "@/app/_components/ReservationCard";
import { BookingType } from "@/app/_types/booking";
import Link from "next/link";

function ReservationsPage() {
  const bookings: BookingType[] = [];

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Ваши бронирования
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          У вас пока нет бронирований. Посмотрите наши{" "}
          <Link className="text-accent-500 underline" href="/cabins">
            домики &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReservationsPage;
