import { Suspense } from "react";
import { getCabin, getCabins, getSettings } from "@/app/_lib/data-service";
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";

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
        <h2 className="mb-10 text-center text-3xl font-semibold text-accent-400 lg:text-5xl">
          Забронируйте уютный домик {name} уже сегодня! Оплата при заезде.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
