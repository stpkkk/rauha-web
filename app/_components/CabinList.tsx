import { revalidatePath } from "next/cache";
import { getCabins } from "../_lib/data-service";
import { CabinType } from "../_types/cabin";
import CabinCard from "./CabinCard";

async function CabinList() {
  const cabins: CabinType[] = await getCabins();
  revalidatePath("/cabins");

  if (!cabins.length) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
