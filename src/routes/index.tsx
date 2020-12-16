import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContributionsMain from '../pages/ContributionsMain';
import ContributionsSecond from '../pages/ContributionsSecond';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ContributionsMain} />
    <Route path="/contributions-second" component={ContributionsSecond} />
  </Switch>
);

export default Routes;
