import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useRecentEmojis } from '../useRecentEmojis'

describe('useRecentEmojis', () => {
  it('deduplicates emojis and keeps the most recent first', () => {
    const { result } = renderHook(() => useRecentEmojis())

    act(() => {
      result.current.addRecentEmoji('😀')
      result.current.addRecentEmoji('🔥')
      result.current.addRecentEmoji('😀')
    })

    expect(result.current.recentEmojis).toEqual(['😀', '🔥'])
  })

  it('limits the list to 16 emojis', () => {
    const { result } = renderHook(() => useRecentEmojis())
    const emojis = Array.from({ length: 20 }, (_, index) => String.fromCodePoint(0x1f600 + index))

    act(() => {
      emojis.forEach((emoji) => result.current.addRecentEmoji(emoji))
    })

    expect(result.current.recentEmojis).toHaveLength(16)
    expect(result.current.recentEmojis[0]).toBe(emojis[19])
  })

  it('restores the stored emojis on mount', () => {
    window.localStorage.setItem('axolotesource:recent-emojis', JSON.stringify(['🔥', '😀']))

    const { result } = renderHook(() => useRecentEmojis())

    expect(result.current.recentEmojis).toEqual(['🔥', '😀'])
  })
})
