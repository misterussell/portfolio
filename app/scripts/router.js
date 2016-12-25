import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import Home from './components/home';
import Projects from './components/projects';

const router = (
  <Router history={ browserHistory } >
    <Route path='/' component={ Home } >
    <IndexRoute component={ Projects } />
      <Route path='projects' component={ Projects } />
    </Route>
  </Router>
);

export default router;
