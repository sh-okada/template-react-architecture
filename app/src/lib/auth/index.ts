import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        plainPassword: {},
      },
      authorize: async (credentials) => {
        return null;
      },
    }),
  ],
});

export { handlers, signIn, signOut, auth };
