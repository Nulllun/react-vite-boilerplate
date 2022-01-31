type EnvConfig = {
  apiBaseUrl: string
}

export const envConfig: EnvConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
}
