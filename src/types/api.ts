export interface ApiError {
  message: string
  code?: string
  statusCode?: number
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface FetchOptions extends RequestInit {
  params?: Record<string, string>
}
