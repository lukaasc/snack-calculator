import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';

import RoutesStore from '../../stores/routes-store';

import Spinner from '../spinner/spinner';
import Maps from '../maps/maps';
import SnackDetails from '../snack-details/snack-details';

@inject('routesStore')
@observer
class RouteItem extends React.Component {
  @observable
  loading = true;

  async componentDidMount() {
    const {
      history,
      match: { params },
      routesStore
    } = this.props;

    const item = await routesStore.getRouteById(params.id);

    if (!('id' in item)) {
      history.push('/');
    }

    this.loading = false;
  }

  render() {
    const { classes, routesStore } = this.props;
    const { name } = routesStore.routeItem;

    return (
      <>
        {this.loading ? (
          <Spinner />
        ) : (
          <>
            <div className={classes.root}>
              <Button variant="fab" color="default" component={Link} to="/">
                <ArrowBackIcon />
              </Button>
              <Typography variant="display1">{name}</Typography>
            </div>
            <Maps paths={routesStore.transformToLatLng()} />
            <SnackDetails />
          </>
        )}
      </>
    );
  }
}

RouteItem.propTypes = {
  routesStore: PropTypes.instanceOf(RoutesStore),
  match: PropTypes.object,
  classes: PropTypes.object
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  }
})(RouteItem);
