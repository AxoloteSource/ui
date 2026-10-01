import { IMessageList } from '../../../../../interfaces/models/Message/IMessage';
interface UseInputSendMessageProps {
    receiverId: string;
    scrollToBottom: () => void;
    handleAddMessage: (newMessage: IMessageList) => void;
    sendMessage: (payload: {
        message: string;
        user_id: string;
    }) => Promise<unknown>;
}
export declare const useInputSendMessage: ({ receiverId, scrollToBottom, handleAddMessage, sendMessage }: UseInputSendMessageProps) => {
    message: string;
    setMessage: import('react').Dispatch<import('react').SetStateAction<string>>;
    handleSendMessage: () => Promise<void>;
    t: import('i18next').TFunction<"translation", undefined>;
    error: string[];
};
export {};
