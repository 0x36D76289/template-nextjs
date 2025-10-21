import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  // Logique pour récupérer tous les utilisateurs
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]

  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  // Logique de création d'utilisateur
  const newUser = {
    id: Date.now(),
    ...body,
  }

  return NextResponse.json(newUser, { status: 201 })
}
