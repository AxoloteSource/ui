import { IMessageList } from '../../../interfaces/models/Message/IMessage';
export declare const useActiveChat: ({ messages, scrollToBottom }: {
    messages: IMessageList[];
    scrollToBottom: () => void;
    selectedChat?: number | null;
}) => {
    handleAddMessage: (newMessage: IMessageList) => void;
    messageList: IMessageList[];
};
