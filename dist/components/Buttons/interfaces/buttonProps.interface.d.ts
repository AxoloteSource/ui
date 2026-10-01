import { ButtonTypeEnum } from '../enums/buttonType.enum';
import { ButtonVariantEnum } from '../enums/buttonVariant.enum';
import { SizeEnum } from '../../../enums/SizeEnum';
import { default as React } from 'react';
export interface IButtonProps {
    type?: ButtonTypeEnum;
    variant?: ButtonVariantEnum;
    children: React.ReactNode;
    loading?: boolean;
    to?: string;
    color?: string;
    className?: string;
    size?: SizeEnum;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => unknown;
    disabled?: boolean;
}
