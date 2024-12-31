import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDays] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDays });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
// export async function POST() {}
