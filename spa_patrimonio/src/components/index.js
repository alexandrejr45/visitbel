import React from "react";
import { HashRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import Home from './Home'
import PagePatrimonio from './PagePatrimonio'

export default props => {
  return (
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/patrimonio" component={PagePatrimonio} />
          <Redirect from="*" to="/home" />
        </Switch>
      </HashRouter>
  );
};
