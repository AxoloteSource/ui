import { SelectedFile } from './types';
interface UseDocumentModalProps {
    selectedFile: SelectedFile | null | undefined;
}
interface UseDocumentModalReturn {
    isPDF: boolean;
    isImage: boolean;
    isPreviewable: boolean;
    fileDisplayName: string;
    fileExtension: string;
    iframeUrl: string;
    isMobile: boolean;
    handleImageError: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}
export declare const useDocumentModal: ({ selectedFile }: UseDocumentModalProps) => UseDocumentModalReturn;
export {};
