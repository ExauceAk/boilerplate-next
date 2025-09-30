import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  pages: {
    signIn: "/signin",
  },

  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {},
        async authorize(credentials) {
            const { accessToken } = credentials as { accessToken: string };
            return { id: accessToken, accessToken };
        },
    }),
] ,

callbacks: {
    async signIn({ account, profile }) {
        if (account?.provider === "google") {
            const params = new URLSearchParams({
                email: profile?.email || "",
            });

            // Return a URL string to redirect after sign in
            return `/fidushare/google-authentication?${params.toString()}`;
        }

        return true;
    },
    async session({ session, token }) {
        return { ...session, ...token };
    },

    async jwt({ token, user }) {
        return { ...token, ...user };
    },
},
})

export { handler as GET, handler as POST }