import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contributions from '../pages/Contributions';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Contributions} />
  </Switch>
);

export default Routes;
