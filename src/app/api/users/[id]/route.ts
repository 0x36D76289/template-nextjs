import { NextRequest, NextResponse } from 'next/server'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params

  // Logique pour récupérer un utilisateur par ID
  const user = {
    id: parseInt(id),
    name: 'John Doe',
    email: 'john@example.com',
  }

  return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params
  const body = await request.json()

  // Logique de mise à jour d'utilisateur
  const updatedUser = {
    id: parseInt(id),
    ...body,
  }

  return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params

  // Logique de suppression d'utilisateur
  return NextResponse.json({ message: `Utilisateur ${id} supprimé` })
}
