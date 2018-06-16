# DexUtils

A human usable interface for managing and navigating IndexedDB

## Prerequisites 

```
[react v16.3+](https://reactjs.org/)
[react-dom v16.3+](https://reactjs.org/)
[react-router v4+](https://github.com/ReactTraining/react-router)
```

### Optional

```
[Dexie](http://dexie.org/)
```

## Installing

```
npm install dex-utils
yarn add dex-utils
```

And then in your router

```
<Route path="<path/for/utils" component={DexUtils}>

// OR

<Route path="<path/>for/utils" render={props => <DexUtils {...props} dbNames={[...]}>}>
```

## Use

`DexUtils` has to be attached to a route at the base of your project. An optional `dbNames` prop can be passed with a list of database names.

### Props
  
#### [dbNames] - optional

If you are not already using `Dexie`, you will have to tell the plug which databases it should be looking for. You can do this by passing a list of strings to the `dbNames` prop. If you **are** using `Dexie`, the application is smart enough to find any databases you've already instantiated.

## Example

```
// index.js - entry point
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

[x] Get databases not created with Dexie?

[ ] Demo

[ ] Tests for both the IndexedDB interface and components

[ ] JSDocs

[ ] More features?
