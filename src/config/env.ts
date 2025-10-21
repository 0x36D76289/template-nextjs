import { z } from 'zod'

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),

  // NextAuth
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().url(),

  // OAuth providers (optionnel)
  GITHUB_ID: z.string().optional(),
  GITHUB_SECRET: z.string().optional(),
  GOOGLE_ID: z.string().optional(),
  GOOGLE_SECRET: z.string().optional(),

  // Email
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),

  // Stripe (optionnel)
  STRIPE_PUBLIC_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Environment
  NODE_ENV: z.enum(['development', 'test', 'production']),
})

export const env = envSchema.parse(process.env)
