declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GOOGLE_RECAPTURE:      string
    GOOGLE_PROJECT_ID:                 string
    GOOGLE_APPLICATION_CREDENTIALS:    string
    TELEGRAM_BOT_TOKEN:                string
    TG_CHAT_ID:                        number
  }
}
