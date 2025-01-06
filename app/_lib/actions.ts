"use server";

import { signIn, signOut } from "./auth";

export const signInAction = async (provider: string) => {
  await signIn(provider, { redirectTo: "/account" });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
