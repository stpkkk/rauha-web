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
  let displayedCabins;
  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  if (!cabins.length) return null;

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
        {displayedCabins?.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}

export default CabinList;
