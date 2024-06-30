interface LoginRequest {
  username: string
  password: string
}

interface LoginResponse {
  token: string
}

type UserInfo = {
  id: string
  username: string
  nickname: string
  roleId: UserRoleEnum
  phoneNumber: string
  avatar: string
}
