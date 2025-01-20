// import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import { CabinType } from "../_types/cabin";
import CabinCard from "./CabinCard";

type CabinListProps = {
  filter: string;
};

async function CabinList({ filter }: CabinListProps) {
  // noStore(); - to unsubscribe from cashing data (instead export const revalidate = 3600 in cabins-page)
  const cabins: CabinType[] = await getCabins();
  const displayedCabins =
    {
      all: cabins,
      small: cabins.filter((cabin) => cabin.maxCapacity <= 3),
      medium: cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
      ),
      large: cabins.filter((cabin) => cabin.maxCapacity >= 8),
    }[filter] || cabins;

  if (!cabins.length) return null;

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        {displayedCabins?.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}

export default CabinList;
