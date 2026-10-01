import { ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export type UrlLike = string | {
    url: string;
};
export declare function isSameUrl(url1: UrlLike, url2: UrlLike): boolean;
export declare function resolveUrl(url: UrlLike): string;
