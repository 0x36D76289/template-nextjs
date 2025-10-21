import type { NextAuthOptions, DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
  }
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    // Ajouter vos providers ici
    // Exemple: CredentialsProvider, GoogleProvider, etc.
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}
