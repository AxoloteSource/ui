import { JSX } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps<TUser = Record<string, unknown>> {
  element: JSX.Element
  isAuthenticated: boolean
  user?: TUser | null
  hasPermission?: (user: TUser) => boolean
  loginPath?: string
  forbiddenPath?: string
}

const PrivateRoute = <TUser extends object>({
  element,
  isAuthenticated,
  user,
  hasPermission,
  loginPath = '/login',
  forbiddenPath = '/403'
}: PrivateRouteProps<TUser>) => {
  if (!isAuthenticated) {
    return <Navigate to={loginPath} />
  }

  if (hasPermission && user && !hasPermission(user)) {
    return <Navigate to={forbiddenPath} />
  }

  return element
}

export default PrivateRoute
