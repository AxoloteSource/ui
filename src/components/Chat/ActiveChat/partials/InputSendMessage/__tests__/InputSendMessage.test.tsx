import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ComponentProps, ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { InputSendMessage } from '../InputSendMessage'

vi.mock('frimousse', () => {
  type RootProps = {
    children?: ReactNode
    onEmojiSelect?: (emoji: { emoji: string; label: string }) => void
  }

  const Root = ({ children, onEmojiSelect }: RootProps) => (
    <div>
      {children}
      <button type="button" onClick={() => onEmojiSelect?.({ emoji: '😀', label: 'Grinning face' })}>
        mock-select-emoji
      </button>
    </div>
  )

  const Search = (props: ComponentProps<'input'>) => <input {...props} />
  const Viewport = ({ children }: ComponentProps<'div'>) => <div>{children}</div>
  const Loading = ({ children }: ComponentProps<'span'>) => <span>{children}</span>
  const Empty = ({ children }: ComponentProps<'span'>) => <span>{children}</span>
  const List = () => <div data-testid="emoji-list" />
  const ActiveEmoji = ({ children }: { children: (props: { emoji: { emoji: string; label: string } | null }) => ReactNode }) => (
    <>{children({ emoji: null })}</>
  )
  const SkinToneSelector = (props: ComponentProps<'button'>) => <button {...props} />

  return {
    EmojiPicker: {
      Root,
      Search,
      Viewport,
      Loading,
      Empty,
      List,
      ActiveEmoji,
      SkinToneSelector
    }
  }
})

const setup = () => {
  const sendMessage = vi.fn().mockResolvedValue(undefined)
  const scrollToBottom = vi.fn()
  const handleAddMessage = vi.fn()

  render(<InputSendMessage receiverId="1" scrollToBottom={scrollToBottom} handleAddMessage={handleAddMessage} sendMessage={sendMessage} />)

  return { sendMessage, scrollToBottom, handleAddMessage }
}

describe('InputSendMessage emoji picker', () => {
  it('inserts an emoji at the current caret and stores it as recent', async () => {
    setup()

    const textarea = screen.getByPlaceholderText('type_message ...') as HTMLTextAreaElement
    await userEvent.type(textarea, 'Hola mundo')
    textarea.setSelectionRange(5, 5)
    fireEvent.select(textarea)

    await userEvent.click(screen.getByRole('button', { name: 'emojis' }))
    expect(await screen.findByPlaceholderText('emoji_search')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'mock-select-emoji' }))
    await userEvent.click(screen.getByRole('button', { name: 'mock-select-emoji' }))

    expect(textarea).toHaveValue('Hola 😀😀mundo')
    expect(screen.getByRole('button', { name: '😀' })).toBeInTheDocument()
    expect(JSON.parse(window.localStorage.getItem('axolotesource:recent-emojis') ?? '[]')).toEqual(['😀'])

    await userEvent.keyboard('{Escape}')

    await waitFor(() => expect(textarea).toHaveFocus())
    expect(textarea.selectionStart).toBe(9)
  })

  it('closes with Escape and returns the focus to the composer', async () => {
    setup()

    const textarea = screen.getByPlaceholderText('type_message ...') as HTMLTextAreaElement
    await userEvent.click(screen.getByRole('button', { name: 'emojis' }))
    expect(await screen.findByPlaceholderText('emoji_search')).toBeInTheDocument()

    await userEvent.keyboard('{Escape}')

    await waitFor(() => expect(screen.queryByPlaceholderText('emoji_search')).not.toBeInTheDocument())
    await waitFor(() => expect(textarea).toHaveFocus())
  })

  it('keeps sending messages with Enter', async () => {
    const { sendMessage, handleAddMessage, scrollToBottom } = setup()

    const textarea = screen.getByPlaceholderText('type_message ...')
    await userEvent.type(textarea, 'Hola{Enter}')

    await waitFor(() => expect(sendMessage).toHaveBeenCalled())
    expect(sendMessage.mock.calls[0][0]).toEqual({
      message: 'Hola',
      user_id: '1'
    })
    expect(handleAddMessage).toHaveBeenCalled()
    expect(scrollToBottom).toHaveBeenCalled()
  })
})
