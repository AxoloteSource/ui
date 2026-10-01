import { IStatus } from './useAvatar';
interface IAvatarProps {
    status?: IStatus;
    imagePath?: string;
    className?: string;
}
export declare const Avatar: ({ status, imagePath, className }: IAvatarProps) => import("react").JSX.Element;
export {};
