import React from 'react';
import Main from '../containers/Main.jsx';
import HomeContainer from '../containers/HomeContainer.jsx';
import { Router, Route, hashHistory, IndexRoute, HashRouter } from 'react-router';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={HomeContainer} />

    </Route>
  </Router>
);

export default routes;
