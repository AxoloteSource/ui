import { IChatList } from '../../../../interfaces/models/Chat/IChat';
interface ChatSectionProps<T extends IChatList> {
    title: string;
    iterator: T[];
    setSelectedChat: (id: number) => void;
    selectUser?: (user: string) => void;
    selectedUser?: string;
}
export declare const ChatSection: <T extends IChatList>({ title, iterator, setSelectedChat, selectUser, selectedUser }: ChatSectionProps<T>) => import("react").JSX.Element;
export {};
