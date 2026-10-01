import { default as React } from 'react';
export interface DocumentAttachmentProps {
    name: string;
    onClick?: () => void;
    onDelete?: () => void;
    loading?: boolean;
    deleteLabel?: string;
    className?: string;
}
export declare const DocumentAttachment: React.FC<DocumentAttachmentProps>;
export default DocumentAttachment;
