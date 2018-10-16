import React from 'react';
import PropTypes from 'prop-types';

import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap, Polyline } from 'react-google-maps';

const Maps = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} center={props.paths[0]}>
    <Polyline
      path={props.paths}
      geodesic={false}
      options={{
        strokeColor: '#ff2527',
        strokeOpacity: 0.75,
        strokeWeight: 10,
        icons: [
          {
            offset: '0',
            repeat: '20px'
          }
        ]
      }}
    />
  </GoogleMap>
));

Maps.propTypes = {
  paths: PropTypes.array
};

export default Maps;
