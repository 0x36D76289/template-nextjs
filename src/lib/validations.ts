import { z } from 'zod'

// Exemples de schémas de validation
export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z
    .string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
})

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    password: z
      .string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

export const contactSchema = z.object({
  name: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères'),
})
