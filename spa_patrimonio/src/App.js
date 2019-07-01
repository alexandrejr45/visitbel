import '../src/css/style.css'
import React from 'react';
import Main from  './components/'
import Header from './components/Header'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
}
