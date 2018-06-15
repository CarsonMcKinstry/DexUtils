# DexUtils

A human usable interface for managing and navigating IndexedDB

## Prerequisites 

```
react v16.3+
react-dom v16.3+
react-router v4+
```
## Installing

```
npm install dex-utils
yarn add dex-utils
```

And then in your router

```
<Route path="__utils" component={DexUtils}>
```

## Example

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import App from './App';
import DexUtils from 'dex-utils';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ App }/>
      <Route path="/__utils" component={ DexUtils }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root');
);

```

### To-Do List

[ ] Get databases not created with Dexie
[ ] Demo
[ ] Tests for both the IndexedDB interface and components
[ ] JSDocs
[ ] More features?
