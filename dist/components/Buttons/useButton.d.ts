import { SizeEnum } from '../../enums/SizeEnum';
import { ButtonTypeEnum } from './enums/buttonType.enum';
import { IUseButtonProps } from './interfaces/userButtonProps.interface';
export declare const buttonClasses: {
    'round-alternate': string;
    rounded: string;
    'rounded-outline': string;
    icon: string;
    solid: string;
    outline: string;
    circle: string;
    'icon-outline': string;
};
export declare const buttonSizeClasses: Record<SizeEnum, string>;
export declare const useButton: (props: IUseButtonProps) => {
    tag: string | import('react').ForwardRefExoticComponent<import('react-router-dom').LinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
    tagProps: {
        to: string;
        className: string;
        disabled: boolean;
        type?: undefined;
    } | {
        type: ButtonTypeEnum;
        className: string;
        disabled: boolean;
        to?: undefined;
    };
    customChildren: string | number | bigint | boolean | Iterable<import('react').ReactNode> | Promise<string | number | bigint | boolean | import('react').ReactPortal | import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>> | Iterable<import('react').ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
};
