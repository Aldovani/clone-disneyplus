import {
  Route,
  Redirect
} from 'react-router-dom';
type PrivateRouteProps = {
  children: React.ReactNode;
  isAuthenticated: boolean;
}
function PrivateRoute({ children, isAuthenticated, ...rest }:PrivateRouteProps) {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}

export default PrivateRoute;