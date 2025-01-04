import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  //For Protected route: redirect to '/login' from '/account' if user not authorized
  callbacks: {
    authorized({ auth, request }: { auth: Session | null; request: Request }) {
      return !!auth?.user;
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
