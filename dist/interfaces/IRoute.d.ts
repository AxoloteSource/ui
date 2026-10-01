import { IUser } from './models/User/user.interface';
import { default as React } from 'react';
interface IRoute {
    path: string;
    element: React.ReactNode;
    layout?: string;
    private?: boolean;
    hasPermission?: (props: IUser) => boolean;
}
export default IRoute;
