import React from 'react';
import DexUtils from '../lib';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route path="/__utils" render={ (props) => <DexUtils {...props}/>}/>
  </BrowserRouter>
);

export default App;
