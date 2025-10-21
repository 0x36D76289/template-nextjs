'use server'

import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    // Ici vous pouvez ajouter votre logique d'authentification
    // Par exemple, vérifier les credentials avec votre base de données

    // Pour l'exemple, on simule une connexion réussie
    console.log('Tentative de connexion:', { email, password })

    // Rediriger vers le dashboard après connexion
    redirect('/dashboard')
  } catch (error) {
    console.error('Erreur de connexion:', error)
    throw new Error('Échec de la connexion')
  }
}

export async function registerAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    // Ici vous pouvez ajouter votre logique d'inscription
    // Par exemple, créer un nouvel utilisateur dans votre base de données

    console.log("Tentative d'inscription:", { name, email, password })

    // Rediriger vers la page de connexion après inscription
    redirect('/login?message=Inscription réussie')
  } catch (error) {
    console.error("Erreur d'inscription:", error)
    throw new Error("Échec de l'inscription")
  }
}

export async function logoutAction() {
  try {
    // Ici vous pouvez ajouter votre logique de déconnexion
    console.log('Déconnexion')

    // Rediriger vers la page d'accueil
    redirect('/')
  } catch (error) {
    console.error('Erreur de déconnexion:', error)
    throw new Error('Échec de la déconnexion')
  }
}
