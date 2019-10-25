import React, { Fragment, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
const Main = React.lazy(() => import('./components/index'));
const Header = React.lazy(() => import('./components/src/Header'));

library.add(fas);

export default function App() {
  return (
    <Fragment>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Carregando...</div>}>
            <Header />
            <Main />
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}
