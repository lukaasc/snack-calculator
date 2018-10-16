import React from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NavigationIcon from '@material-ui/icons/Navigation';

import RoutesStore from '../../stores/routes-store';

import Spinner from '../spinner/spinner';

@inject('routesStore')
@observer
class RoutesMenu extends React.Component {
  @observable
  loading = true;

  async componentDidMount() {
    const { routesStore } = this.props;

    await routesStore.getRoutes();

    this.loading = false;
  }

  render() {
    const { routesStore } = this.props;

    return (
      <>
        <Typography variant="display1">Pick your route</Typography>
        {this.loading ? (
          <Spinner />
        ) : (
          <MenuList>
            {routesStore.routes.map(route => (
              <MenuItem key={route.id} component={Link} to={`/routes/${route.id}`}>
                <ListItemIcon>
                  <NavigationIcon />
                </ListItemIcon>
                <ListItemText inset primary={route.name} />
              </MenuItem>
            ))}
          </MenuList>
        )}
      </>
    );
  }
}

RoutesMenu.propTypes = {
  routesStore: PropTypes.instanceOf(RoutesStore)
};

export default RoutesMenu;
