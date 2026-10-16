import { IMessageList } from '../../../interfaces/models/Message/IMessage'

export interface ActiveChatProps {
  handleOpenMenu?: () => void
  messages: IMessageList[]
  scrollMessageListProps: {
    hasNextPage: boolean
    isFetchingNextPage: boolean
    fetchNextPage: () => void
  }
  titleUserCard: string
  subtitleUserCard: string
  receiverId: string
  selectedChat: number
  sendMessage: (payload: { message: string; user_id: string }) => Promise<unknown>
  /** When true, renders a view-only thread: header + messages + scroll, no composer. */
  readOnly?: boolean
}
