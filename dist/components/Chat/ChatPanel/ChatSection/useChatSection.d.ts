export declare const useChatSection: ({ setSelectedChat, selectUser }: {
    setSelectedChat: (id: number) => void;
    selectUser?: (user: string) => void;
}) => {
    handleSelected: (conversationId: number, userId: string) => void;
};
