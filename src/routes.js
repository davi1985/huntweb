import React from 'react';

import { HashRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/products/:id' component={Product} />
    </Switch>
  </HashRouter>
);

export default Routes;