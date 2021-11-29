import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";

import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

import Admin from "../Pages/Admin";
import UserDashboard from "../Pages/UserDashboard";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* Admin Routes */}
      <AdminRoute path="/admin/dashboard" Component={Admin} />
      <AdminRoute path="/admin/users" Component={Admin} />
      <AdminRoute path="/admin/creditdebit" Component={Admin} />
      {/* User Routes */}
      <UserRoute path="/user/dashboard" Component={UserDashboard} />
      <UserRoute path="/user/transactions" Component={UserDashboard} />
      <UserRoute path="/user/transfer" Component={UserDashboard} />
    </Switch>
  );
};

export default Routes;