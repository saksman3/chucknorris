import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import RandomJoke from "../components/RandomJoke";
import Search from "../components/SearchJoke";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/category/:id" component={RandomJoke} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRoute;
