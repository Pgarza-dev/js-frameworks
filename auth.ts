import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

//  const config: NextAuthConfig = {
//      providers: [
//           Google({
//           clientId: process.env.GOOGLE_CLIENT_ID,
//           clientSecret: process.env.GOOGLE_CLIENT_SECRET
//           })
//      ],
//      secret: process.env.SECRET,
//      }

//  export const { handlers, auth, signIn, signOut  } = NextAuth(config)
