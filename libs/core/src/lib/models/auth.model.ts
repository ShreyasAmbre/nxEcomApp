export interface AuthState {
  userId: number,
  username: string,
  password: string,
  email: string,
  token: string,
  authError: '',
  error: string
}

export interface SignUpRequest {
  id: number,
  username: string,
  email: string,
  password: string
}
export interface SignUpResponse {
  id: number,
  username: string,
  email: string,
  password: string
}
