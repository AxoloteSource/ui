import { SendHorizontal } from 'lucide-react'
import { IMessageList } from '../../../../../interfaces/models/Message/IMessage'
import { TextAreaSendMessage } from '../../../../Form/TextArea/TextAreaSendMessage'
import { EmojiPickerPopover } from './EmojiPickerPopover'
import { useInputSendMessage } from './useInputSendMessage'

export const InputSendMessage = ({
  receiverId,
  scrollToBottom,
  handleAddMessage,
  sendMessage
}: {
  receiverId: string
  scrollToBottom: () => void
  handleAddMessage: (newMessage: IMessageList) => void
  sendMessage: (payload: { message: string; user_id: string }) => Promise<unknown>
}) => {
  const { setMessage, handleSendMessage, insertEmoji, rememberSelection, focusTextarea, textareaRef, t, message, error } = useInputSendMessage({
    receiverId,
    scrollToBottom,
    handleAddMessage,
    sendMessage
  })
  return (
    <div className="absolute bottom-0 left-0 w-full p-4">
      <div className="w-full items-center space-x-3 sm:flex rtl:space-x-reverse">
        <div className="relative flex-1">
          <TextAreaSendMessage
            error={error}
            name={`message`}
            value={message}
            inputRef={textareaRef}
            inputCallback={(e) => {
              rememberSelection(e)
              setMessage(e.target.value)
            }}
            placeholder={`${t('type_message')} ...`}
            startAdornment={<EmojiPickerPopover onSelect={insertEmoji} onClose={focusTextarea} />}
            IconComponent={() => <SendHorizontal className="ml-2 shrink-0 cursor-pointer" onClick={() => message !== '' && handleSendMessage()} />}
            inputKeyUpCallback={(e) => {
              rememberSelection(e)
            }}
            inputKeyDownCallback={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()

                if (message !== '') {
                  handleSendMessage()
                }
              }
            }}
            inputSelectCallback={rememberSelection}
          />
        </div>
      </div>
    </div>
  )
}
