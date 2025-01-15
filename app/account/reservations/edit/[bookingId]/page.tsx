import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { BookingType } from "@/app/_types/booking";
import { CabinType } from "@/app/_types/cabin";

type EditPageProps = {
  params: { bookingId: number };
};

export default async function EditPage({ params }: EditPageProps) {
  const booking: BookingType = await getBooking(params.bookingId);
  const cabin: CabinType = await getCabin(booking.cabinId);
  const maxCapacity = cabin.maxCapacity;

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Редактировать бронирование #{params.bookingId}
      </h2>

      <form
        action={updateBooking}
        className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
      >
        <input type="hidden" name="bookingId" value={params.bookingId} />
        <div className="space-y-2">
          <label htmlFor="numGuests">Сколько будет гостей?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={booking.numGuests}
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option value="" key="">
              Выберите количество гостей...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "гость" : "гостей"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Что-нибудь, что мы должны знать о вашем пребывании?
          </label>
          <textarea
            name="observations"
            defaultValue={booking.observations}
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SubmitButton text="Обновить" pendingText="Обновляем..." />
        </div>
      </form>
    </div>
  );
}
