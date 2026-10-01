import { IMessageList } from '../../../../../interfaces/models/Message/IMessage'
import { formatDate } from '../../../../../lib/formatDate'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
    t,
    error
  }
}
