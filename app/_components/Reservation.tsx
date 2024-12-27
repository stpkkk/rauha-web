import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { CabinType } from "../_types/cabin";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

type ReservationType = {
  cabin: CabinType;
};

export default async function Reservation({ cabin }: ReservationType) {
  const [settings, bookedDays] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid min-h-[400px] grid-cols-2 border border-primary-800">
      <DateSelector settings={settings} bookedDays={bookedDays} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
