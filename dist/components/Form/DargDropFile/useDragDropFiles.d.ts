import { IUseDragDropFilesProps } from './interfaces/IUseDragDropFilesProps';
export declare const useDragDropFiles: ({ onUploadFile, multiple, accept }: IUseDragDropFilesProps) => {
    onClick: () => void;
    getRootProps: <T extends import('react-dropzone').DropzoneRootProps>(props?: T) => T;
    getInputProps: <T extends import('react-dropzone').DropzoneInputProps>(props?: T) => T;
    acceptedFiles: readonly import('react-dropzone').FileWithPath[];
    getFileIcon: (fileName: string) => import("react").JSX.Element;
};
