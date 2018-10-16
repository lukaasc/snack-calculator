import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import RoutesMenu from './routes-menu/routes-menu';
import RouteItem from './route-item/route-item';

import './app.scss';

const App = ({ classes }) => (
  <Card className={classes.root}>
    <Switch>
      <Route exact path="/routes/:id" component={RouteItem} />
      <Route component={RoutesMenu} />
    </Switch>
  </Card>
);

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles({
  root: {
    width: '30%',
    minHeight: 600,
    margin: '40px auto',
    textAlign: 'center',
    padding: '1rem'
  }
})(App);
