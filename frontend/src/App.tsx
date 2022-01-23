import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/index";
import { SingUp } from "./pages/Sign-up";
import { Home } from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/sing-up" component={SingUp} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
