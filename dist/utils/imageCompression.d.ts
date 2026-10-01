interface ImageCompressionOptions {
    maxSizeMB?: number;
    maxWidthOrHeight?: number;
    useWebWorker?: boolean;
}
export declare const compressImage: (file: File, options?: ImageCompressionOptions) => Promise<File>;
export declare const compressImages: (files: File[], options?: ImageCompressionOptions) => Promise<File[]>;
export {};
