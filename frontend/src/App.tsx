import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/index";
import {  SingUp} from "./pages/Sign-up";
import { Home } from "./pages/Home";


export function App() { 
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login"  component={Login} />
        <Route path="/sing-up"  component={SingUp} />
        <Route path="/home"  component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
