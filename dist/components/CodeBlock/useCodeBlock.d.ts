interface UseCodeBlockParams {
    code: string;
    language?: string;
}
export declare const useCodeBlock: ({ code, language }: UseCodeBlockParams) => {
    detectedLanguage: string | undefined;
    highlightedCode: string;
    copied: boolean;
    copyToClipboard: () => Promise<void>;
};
export {};
