import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { CabinType } from "../_types/cabin";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

type ReservationType = {
  cabin: CabinType;
};

export default async function Reservation({ cabin }: ReservationType) {
  const [settings, bookedDays] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="border border-primary-800 sm:flex sm:flex-col xl:grid xl:grid-cols-2">
      <DateSelector settings={settings} bookedDays={bookedDays} cabin={cabin} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
