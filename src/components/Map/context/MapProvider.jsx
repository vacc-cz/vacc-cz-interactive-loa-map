import PropTypes from 'prop-types';
import React from 'react';
import { getTransformedYValue } from '../helpers/getTransformedYValue';
import { MapContext } from './MapContext';

const MapProvider = ({
  children,
  height,
  width,
  xMax,
  xMin,
  yMax,
  yMin,
}) => (
  <MapContext.Provider
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value={{
      height,
      tX: (x) => x,
      tY: (y) => getTransformedYValue(y, height),
      width,
      xMax,
      xMin,
      yMax,
      yMin,
    }}
  >
    {children}
  </MapContext.Provider>
);

MapProvider.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  xMax: PropTypes.number.isRequired,
  xMin: PropTypes.number.isRequired,
  yMax: PropTypes.number.isRequired,
  yMin: PropTypes.number.isRequired,
};

export default MapProvider;
