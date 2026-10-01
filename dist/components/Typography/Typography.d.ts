import { TypographyVariantEnum } from './enums/typographyVariant.enum';
import { Color } from '../../enums/Color';
import { default as React } from 'react';
export interface TypographyProps {
    variant: TypographyVariantEnum;
    children?: React.ReactNode;
    color?: string | Color;
    className?: string;
    fontBold?: boolean;
}
declare const Typography: ({ variant, children, color, className, fontBold }: TypographyProps) => React.JSX.Element;
export default Typography;
