import { useCallback, useState } from 'react'

const STORAGE_KEY = 'axolotesource:recent-emojis'
const MAX_RECENT_EMOJIS = 16

const readRecentEmojis = (): string[] => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed: unknown = stored ? JSON.parse(stored) : []

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter((emoji): emoji is string => typeof emoji === 'string').slice(0, MAX_RECENT_EMOJIS)
  } catch {
    return []
  }
}

export const useRecentEmojis = () => {
  const [recentEmojis, setRecentEmojis] = useState<string[]>(readRecentEmojis)

  const addRecentEmoji = useCallback((emoji: string) => {
    setRecentEmojis((previous) => {
      const next = [emoji, ...previous.filter((item) => item !== emoji)].slice(0, MAX_RECENT_EMOJIS)

      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // localStorage may be unavailable (private mode, quota exceeded, SSR).
      }

      return next
    })
  }, [])

  return { recentEmojis, addRecentEmoji }
}
