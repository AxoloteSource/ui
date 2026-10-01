export type IStatus = 'busy' | 'available' | null;
export declare const useAvatar: ({ status }: {
    status: IStatus;
}) => {
    avatarStatus: string;
};
