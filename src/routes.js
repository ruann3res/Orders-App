import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Orders from "./pages/Orders";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </Router>
  );
}
export default Routes;
