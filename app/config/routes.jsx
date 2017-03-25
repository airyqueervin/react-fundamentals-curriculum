import React from 'react';
import Main from '../components/Main.jsx';
import { Router, Route, hashHistory, IndexRoute, HashRouter } from 'react-router';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>

    </Route>
  </Router>
);

export default routes;