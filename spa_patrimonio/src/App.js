import React from 'react';
import Main from  './components/'
import { BrowserRouter } from "react-router-dom";
import Header from './components/src/Header'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <Header />
        <Main />
      </BrowserRouter>
    </React.Fragment>
  );
}
