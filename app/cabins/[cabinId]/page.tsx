import Cabin from "@/app/_components/Cabin";
import Reservations from "@/app/_components/Reservation";
import ReservationReminder from "@/app/_components/ReservationReminder";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

type CabinPageProps = {
  params: { cabinId: number };
};

// export const metadata = {
//   title: "Домик",
// };

export async function generateMetadata({ params }: CabinPageProps) {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Домик ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  //generateStaticParams need to return an array and each value must be an object  [{ cabinId: '162' }, { cabinId: '163' }]
  return ids;
}

export default async function CabinPage({ params }: CabinPageProps) {
  const cabin = await getCabin(params.cabinId);

  const { name } = cabin;

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
          Забронируйте домик {name} сегодня. Оплатите при прибытии.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservations cabin={cabin} />
          <ReservationReminder />
        </Suspense>
      </div>
    </div>
  );
}
