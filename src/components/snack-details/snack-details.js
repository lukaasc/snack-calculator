import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SnackStore from '../../stores/snack-store';
import RoutesStore from '../../stores/routes-store';

const SnackDetails = inject('snackStore', 'routesStore')(
  observer(props => {
    const {
      classes,
      snackStore,
      routesStore: {
        routeItem: { locations }
      }
    } = props;
    const numberOfSnacks = snackStore.calculateNumberOfSnacks(locations);

    return (
      <div className={classes.root}>
        <Typography variant="display1">{numberOfSnacks ? `Take ${numberOfSnacks} snacks for this walk!` : 'No snacks needed! :)'}</Typography>
      </div>
    );
  })
);

SnackDetails.propTypes = {
  snackStore: PropTypes.instanceOf(SnackStore),
  routesStore: PropTypes.instanceOf(RoutesStore),
  classes: PropTypes.object,
  locations: PropTypes.array
};

export default withStyles({
  root: {
    margin: '2rem'
  }
})(SnackDetails);
