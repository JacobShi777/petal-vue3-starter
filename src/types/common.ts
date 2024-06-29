interface ApiResponse<T = undefined> {
  code: number
  data: T
  msg: string
}
