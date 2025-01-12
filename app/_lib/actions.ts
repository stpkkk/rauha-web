"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { getBookings } from "./data-service";
// import { getBookedDatesByCabinId, getCabin } from "./data-service";

// export async function createBooking(formData: FormData) {
//   const session = await auth();
//   const cabin = await getCabin()
//   const bookedDates = await getBookedDatesByCabinId(cabin.id);
//   const numGuests = formData.get("numGuests") as string;
//   const observations = formData.get("observations") as string;

//   const newBooking = {
//     guestId: session?.user.guestId,
//     numGuests,
//     observations
//   };
// }

export async function deleteReservation(bookingId: number) {
  const session = await auth();

  if (!session) throw new Error("Вы должны войти!");

  //to restrict the user only can delete their own reservations
  const bookings = await getBookings(session.user.guestId);
  if (!bookings.some((el) => el.id === +bookingId))
    throw new Error("У вас нет прав удалить это бронирование");

  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId)
    .eq("guestId", session.user.guestId);

  if (error) throw new Error("Невозможно удалить бронирование");

  revalidatePath("/account/reservations");
}

export async function updateGuest(formData: FormData) {
  const session = await auth();

  if (!session) throw new Error("Вы должны войти!");

  const passportId = formData.get("passportId") as string;
  const homeTown = formData.get("homeTown") as string;

  if (!/^\d{10}$/.test(passportId))
    throw new Error("Пожалуйста введите верные паспортные данные");

  const updatedFields = { passportId, homeTown };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", session?.user.guestId)
    .select()
    .single();

  if (error) throw new Error("Пользователь не может быть обновлен");

  revalidatePath("/account");
}

export const signInAction = async (provider: string) => {
  await signIn(provider, { redirectTo: "/account/profile" });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
