import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../Loading";
type PrivateRouteProps = {
  path: string;
  component: React.FC;
};

const styleContainer = {
  "min-width": "100vw",
  "min-height": "100vh",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  background: "#040714",
};

function PrivateRoute({ path, component, ...rest }: PrivateRouteProps) {
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading)
    return (
      <div style={styleContainer}>
        <Loading />
      </div>
    );
  else {
    if (user) return <Route path={path} component={component} />;
    else return <Redirect to="/login" />;
  }
}

export default PrivateRoute;
