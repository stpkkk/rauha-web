"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";

export async function updateGuest(formData: FormData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

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

  if (error) {
    console.error(error);
    throw new Error("Пользователь не может быть обновлен");
  }

  revalidatePath("/account");
}

export const signInAction = async (provider: string) => {
  await signIn(provider, { redirectTo: "/account/profile" });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
