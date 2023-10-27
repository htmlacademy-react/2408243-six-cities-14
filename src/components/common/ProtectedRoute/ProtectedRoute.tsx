import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Routers } from '../../../enums';

type ProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  redirectTo: Routers;
};

function ProtectedRoute({
  authorizationStatus,
  children,
  redirectTo,
}: ProtectedRouteProps) {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default ProtectedRoute;
