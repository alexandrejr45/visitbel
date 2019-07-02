import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./src/Home";
import PagePatrimonio from "./src/PagePatrimonios";
import Patrimonio from "./src/Patrimonio";

const Main = () => {
  return (
    <React.Fragment>
      <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/patrimonio" component={PagePatrimonio} />
            <Route exact path="/patrimonio/:id" component={Patrimonio}/>
            <Redirect from="*" to="/home" />
          </Switch>
      </main>
    </React.Fragment>
  );
};

export default Main;
