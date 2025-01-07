import NextAuth, { Account, Profile, Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

type SignInArguments = {
  user: User;
  account: Account | null;
  profile?: Profile;
};

type SessionArguments = { session: Session; user: User };

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    //authorized() - For Protected route: redirect to '/login' from '/account' if user not authorized
    authorized({ auth, request }: { auth: Session | null; request: Request }) {
      return !!auth?.user;
    },

    async signIn({ user, account, profile }: SignInArguments) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch (error) {
        return false;
      }
    },

    async session({ session, user }: SessionArguments) {
      //setting guestId to session for using this id in other part of app(reservations, guest form and other)
      const guest = await getGuest(session.user.email);

      session.user.guestId = guest.id;

      return session;
    },
  },
  pages: {
    //to redirect in our custom /login page, instead default google
    signIn: "/login",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
