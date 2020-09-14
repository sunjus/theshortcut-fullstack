import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EventsPage from "./pages/EventsPage";
import MyRegistrations from "./pages/MyRegistrations";
import TopNav from "./components/TopNav";

export default (Routes) => {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/myregistrations" exact component={MyRegistrations} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/events" component={EventsPage} />
        <Route path="/event/:eventId" component={EventsPage} />
      </Switch>
    </BrowserRouter>
  );
};
