import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EventsPage from "./pages/EventsPage";
import EventDetail from "./pages/EventDetail";
import MyRegistrations from "./pages/MyRegistrations";
import TopNav from "./components/TopNav";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

//Fix고유주소 reset
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
        <Route path="/eventdetail/:eventId" component={EventDetail} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/resetpassword" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
};
