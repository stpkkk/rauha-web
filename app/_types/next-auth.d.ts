//For fixing Session type error in auth.ts
import NextAuth, { User } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User & {
      guestId: number;
    };
  }
}
