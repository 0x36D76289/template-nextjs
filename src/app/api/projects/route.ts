import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  // Logique pour récupérer tous les projets
  const projects = [
    { id: 1, name: 'Projet Alpha', status: 'active' },
    { id: 2, name: 'Projet Beta', status: 'completed' },
  ]

  return NextResponse.json(projects)
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  // Logique de création de projet
  const newProject = {
    id: Date.now(),
    ...body,
  }

  return NextResponse.json(newProject, { status: 201 })
}
