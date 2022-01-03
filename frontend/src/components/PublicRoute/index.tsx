import {
  Route,
  Redirect
} from 'react-router-dom';

type PublicRouteProps = {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

function PublicRoute({ children, isAuthenticated, ...rest }:PublicRouteProps) {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          !isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: location }
              }}
            />
          ))
      }
    />
  );
}

export default PublicRoute;