import type { SyntheticEvent } from 'react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IMessageList } from '../../../../../interfaces/models/Message/IMessage'
import { formatDate } from '../../../../../lib/formatDate'

interface UseInputSendMessageProps {
  receiverId: string
  scrollToBottom: () => void
  handleAddMessage: (newMessage: IMessageList) => void
  sendMessage: (payload: { message: string; user_id: string }) => Promise<unknown>
}

export const useInputSendMessage = ({ receiverId, scrollToBottom, handleAddMessage, sendMessage }: UseInputSendMessageProps) => {
  const { t } = useTranslation()
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string[]>([])
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const selectionRef = useRef({ start: 0, end: 0 })

  const rememberSelection = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget
    const start = textarea.selectionStart ?? 0

    selectionRef.current = { start, end: textarea.selectionEnd ?? start }
  }

  const focusTextarea = () => {
    const textarea = textareaRef.current

    if (!textarea) {
      return
    }

    textarea.focus()
    const { start, end } = selectionRef.current
    textarea.setSelectionRange(start, end)
  }

  const insertEmoji = (emoji: string) => {
    const textarea = textareaRef.current

    if (!textarea) {
      setMessage((previous) => `${previous}${emoji}`)
      return
    }

    const value = textarea.value
    const start = Math.min(selectionRef.current.start, value.length)
    const end = Math.min(Math.max(selectionRef.current.end, start), value.length)
    const caretPosition = start + emoji.length

    setMessage((previous) => `${previous.slice(0, start)}${emoji}${previous.slice(end)}`)
    selectionRef.current = { start: caretPosition, end: caretPosition }

    if (document.activeElement === textarea) {
      requestAnimationFrame(() => {
        textareaRef.current?.setSelectionRange(caretPosition, caretPosition)
      })
    }
  }

  const handleSendMessage = async () => {
    if (message === '') {
      return
    }

    try {
      await sendMessage({ message, user_id: receiverId })
      setError([])
      handleAddMessage({
        isSender: true,
        message,
        imagePath: '',
        timeAgo: formatDate(new Date().toISOString())
      })
      setMessage('')
      selectionRef.current = { start: 0, end: 0 }
      scrollToBottom()
    } catch (err) {
      const response = err as { response?: { data?: { data?: { message?: string[] } } } }
      setError(response?.response?.data?.data?.message || [])
    }
  }

  return {
    message,
    setMessage,
    handleSendMessage,
    insertEmoji,
    rememberSelection,
    focusTextarea,
    textareaRef,
    t,
    error
  }
}
