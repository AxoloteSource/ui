import { IInfiniteScrollProps } from './IInfiniteScrollProps';
export declare const useInfiniteScroll: ({ enabled, onLoadMore }: IInfiniteScrollProps) => {
    sentinelRef: import('react').RefObject<HTMLDivElement | null>;
    t: import('i18next').TFunction<"translation", undefined>;
};
