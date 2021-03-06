import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
}
