import { default as React } from 'react';
export interface ICardTitleProps {
    actionButton?: React.ReactNode;
    children: React.ReactNode;
}
declare const CardTitle: ({ children, actionButton }: ICardTitleProps) => React.JSX.Element;
export default CardTitle;
