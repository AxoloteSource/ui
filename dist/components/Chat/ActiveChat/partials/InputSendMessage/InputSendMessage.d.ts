import { IMessageList } from '../../../../../interfaces/models/Message/IMessage';
export declare const InputSendMessage: ({ receiverId, scrollToBottom, handleAddMessage, sendMessage }: {
    receiverId: string;
    scrollToBottom: () => void;
    handleAddMessage: (newMessage: IMessageList) => void;
    sendMessage: (payload: {
        message: string;
        user_id: string;
    }) => Promise<unknown>;
}) => import("react").JSX.Element;
