import React, {Fragment} from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./src/Home";
import PagePatrimonio from "./src/PagePatrimonios";
import Patrimonio from "./src/Patrimonio";
// import PatrimonioSideBar from './src/PatrimonioSideBar'

const Main = () => {
  return (
    <Fragment>
      <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/patrimonio" component={PagePatrimonio} />
            <Route exact path="/patrimonio/:id" component={Patrimonio}/>
            {/* <Route exact path='/sidebar' component={PatrimonioSideBar} /> */}
            <Redirect from="*" to="/home" />
          </Switch>
      </main>
    </Fragment>
  );
};

export default Main;
