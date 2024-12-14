import { revalidatePath } from "next/cache";
import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { CabinType } from "../_types/cabin";

export const metadata = {
  title: "Домики",
};

export default async function CabinsPage() {
  const cabins: CabinType[] = await getCabins();
  revalidatePath("/cabins");

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

      {cabins.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
