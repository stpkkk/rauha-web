"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import supabase from "./supabase";
import { auth, signIn, signOut } from "./auth";
import { getBookings, getSettings } from "./data-service";

type BookingData = {
  startDate?: Date | null;
  endDate?: Date | null;
  cabinPrice: number;
  numNights: number;
  cabinId: string;
  hasBreakfast: boolean;
};

export async function createBooking(
  bookingData: BookingData,
  formData: FormData,
) {
  const session = await auth();
  if (!session) throw new Error("Вы должны войти для обновления бронирования!");
  const breakfastPrice = await getSettings();

  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations")?.slice(0, 1000);
  const hasBreakfast = formData.get("hasBreakfast") === "on";

  const totalPrice = hasBreakfast
    ? bookingData.cabinPrice + breakfastPrice * bookingData.numNights
    : bookingData.cabinPrice;

  console.log("totalPrice:", totalPrice);

  const newBooking = {
    ...bookingData,
    guestId: session?.user.guestId,
    numGuests,
    observations,
    extrasPrice: 0,
    totalPrice,
    isPaid: false,
    status: "unconfirmed",
    hasBreakfast,
  };

  // const { data, error } = await supabase.from("bookings").insert([newBooking]);

  // if (error) {
  //   console.error(error);
  //   throw new Error("Бронирование не может быть создано 😥");
  // }

  // revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}

export async function updateBooking(formData: FormData) {
  const bookingId = Number(formData.get("bookingId"));

  //1 Authentication
  const session = await auth();
  if (!session) throw new Error("Вы должны войти для обновления бронирования!");

  //2 Authorization, to restrict the user only can delete their own reservations
  const guestBookings = await getBookings(session.user.guestId);
  if (!guestBookings.some((el) => el.id === bookingId))
    throw new Error("У вас нет прав обновлять это бронирование");

  //3 Building update data
  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations")?.slice(0, 1000);
  const updatedFields = { numGuests, observations };

  //4 Mutation
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();

  //5 Error Handling
  if (error) {
    console.error(error);
    throw new Error("Ошибка в обновлении бронирования");
  }

  //6 Revalidate and Redirect
  revalidatePath("/account/reservations", "layout");
  redirect("/account/reservations");
}

export async function deleteBooking(bookingId: number) {
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
