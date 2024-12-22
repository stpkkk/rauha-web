import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";

export const revalidate = 3600;// refetch data every 60 min
// export const revalidate = 15;// refetch data every 15 sec

export const metadata = {
  title: "Домики",
};

export default function CabinsPage() {
  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Про наши домики
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Уютные, но роскошные коттеджи, расположенные в самом сердце Карелии.
        Представьте себе, что вы просыпаетесь и наслаждаетесь прекрасным видом
        на озеро, проводите дни, исследуя леса вокруг, или просто расслабляетесь
        в чане под звездами. Наслаждайтесь красотой природы в небольшом домике
        вдали от города. Идеальное место для тихого, спокойного отдыха. Добро
        пожаловать!
      </p>

      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
