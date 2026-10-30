interface IEmojiPickerPopoverProps {
    onSelect: (emoji: string) => void;
    onClose?: () => void;
}
export declare const EmojiPickerPopover: ({ onSelect, onClose }: IEmojiPickerPopoverProps) => import("react").JSX.Element;
export {};
