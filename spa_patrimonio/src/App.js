import '../src/css/style.css'
import React from 'react';
import Main from  './components/'
import { BrowserRouter } from "react-router-dom";
import Header from './components/src/Header'

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </React.Fragment>
  );
}
