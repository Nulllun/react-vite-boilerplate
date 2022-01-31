export type ApiError = {
  code: string
  message: string
  details: unknown
}

export type ApiResponse<T, M = unknown> = {
  data: T
  error?: ApiError
  meta?: M
}
