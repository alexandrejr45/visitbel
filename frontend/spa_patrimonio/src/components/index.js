import React, {Fragment} from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./home/Home";
import HomePatrimonio from "./patrimonio/HomePatrimonio";
import Patrimonio from "./patrimonio/Patrimonio";

const Main = () => {
  return (
    <Fragment>
      <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/patrimonio" component={HomePatrimonio} />
            <Route path="/patrimonio" component={Patrimonio} />
            <Route path="/patrimonio/:id/:option" component={Patrimonio} />
            <Redirect from="*" to="/home" />
          </Switch>
      </main>
    </Fragment>
  );
};

export default Main;
