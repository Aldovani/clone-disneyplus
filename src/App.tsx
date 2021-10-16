import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import {  SignUp} from "./pages/Sign-up";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/sing-up" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
