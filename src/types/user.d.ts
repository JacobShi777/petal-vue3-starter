interface LoginRequest {
  username: string
  password: string
}

interface LoginResponse {
  token: string
}

interface UserInfo {
  id: string
  username: string
  nickname: string
  roleId: number
  phoneNumber: string
  avatar: string
}
