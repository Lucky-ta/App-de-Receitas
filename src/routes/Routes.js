import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../pages/Foods';
import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/comidas" component={ Header } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
export default Routes;
