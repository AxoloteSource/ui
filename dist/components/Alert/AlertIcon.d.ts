import { AlertTextTypeEnum } from '../../enums/types/AlertTextTypeEnum';
import { default as React } from 'react';
interface AlertIconProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    type?: AlertTextTypeEnum;
    className?: string;
}
declare const _default: React.NamedExoticComponent<AlertIconProps>;
export default _default;
