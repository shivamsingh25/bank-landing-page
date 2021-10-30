import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;