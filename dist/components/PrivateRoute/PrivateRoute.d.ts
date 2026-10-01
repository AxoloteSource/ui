import { JSX } from 'react';
interface PrivateRouteProps<TUser = Record<string, unknown>> {
    element: JSX.Element;
    isAuthenticated: boolean;
    user?: TUser | null;
    hasPermission?: (user: TUser) => boolean;
    loginPath?: string;
    forbiddenPath?: string;
}
declare const PrivateRoute: <TUser extends object>({ element, isAuthenticated, user, hasPermission, loginPath, forbiddenPath }: PrivateRouteProps<TUser>) => JSX.Element;
export default PrivateRoute;
