export interface Session {
  user: {
    id: string
    name: string
    email: string
    image?: string
  }
  expires: string
}

export interface AuthState {
  user: Session['user'] | null
  isAuthenticated: boolean
  isLoading: boolean
}
