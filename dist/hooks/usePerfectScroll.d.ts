interface IPerfectScrollProps {
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
}
export declare const usePerfectScroll: ({ hasNextPage, isFetchingNextPage, fetchNextPage }: IPerfectScrollProps) => {
    handleScrollY: (container: HTMLElement) => void;
    scrollElRef: import('react').RefObject<HTMLElement | null>;
    scrollToBottom: () => void;
    onYReachStart: () => Promise<void>;
    showNoMessages: boolean;
    showLoaderMessages: boolean;
    t: import('i18next').TFunction<"translation", undefined>;
};
export {};
