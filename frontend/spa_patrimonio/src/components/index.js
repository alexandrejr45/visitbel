import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './home/Home';
import HomePatrimonio from './patrimonio/HomePatrimonio';
import Patrimonio from './patrimonio/Patrimonio';

export default function Main() {
  return (
    <Fragment>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/patrimonio" component={HomePatrimonio} />
          <Route path="/patrimonio/:id" component={Patrimonio} />
          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </Fragment>
  );
}
