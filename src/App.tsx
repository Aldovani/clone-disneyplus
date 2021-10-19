import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import {  Email} from "./pages/Sign-up/Email";
import { Password } from "./pages/Sign-up/Password";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/sing-up/email" exact component={Email} />
        <Route path="/sing-up/password" exact component={Password} />
      </Switch>
    </BrowserRouter>
  );
}
