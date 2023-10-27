import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            // serverless -> lambda -> dynamodb
            // only opens up when it gets called and helps prevent from having the server running constantly
        } catch (error) {

        }
    }
})

export { handler as GET, handler as POST }