import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

type CabinsPageProps = {
  searchParams: {
    capacity: string;
  };
};

export const revalidate = 3600; // refetch data every 60 min
// export const revalidate = 15;// refetch data every 15 sec

export const metadata = {
  title: "Домики",
};

export default function CabinsPage({ searchParams }: CabinsPageProps) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="container">
      <h1 className="mb-2 text-2xl font-medium text-accent-400 md:mb-5 md:text-4xl">
        Про наши домики
      </h1>
      <p className="ms:text-lg mb-6 text-primary-200 md:mb-10">
        Уютные, но роскошные коттеджи, расположенные в самом сердце Карелии.
        Представьте себе, что вы просыпаетесь и наслаждаетесь прекрасным видом
        на озеро, проводите дни, исследуя леса вокруг, или просто расслабляетесь
        в чане под звездами. Наслаждайтесь красотой природы в небольшом домике
        вдали от города. Идеальное место для тихого, спокойного отдыха. Добро
        пожаловать!
      </p>

      <div className="mb-6 flex justify-end md:mb-8">
        <Filter />
      </div>
      {/* key={filter} - unique key (than filter value changes then spinner shown again)*/}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
