import React from 'react';
import DexUtils from '../lib';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Route path="/__utils" render={props => <DexUtils {...props} dbNames={['__dbnames']}/>}/>
  </HashRouter>
);

export default App;
