import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = props => {
  const { classes } = props;

  return <CircularProgress className={classes.root} size={50} />;
};

Spinner.propTypes = {
  classes: PropTypes.object
};

export default withStyles({
  root: {
    marginTop: '10rem'
  }
})(Spinner);
