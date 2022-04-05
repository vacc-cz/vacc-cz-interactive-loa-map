import PropTypes from 'prop-types';
import React from 'react';
import { GraphProvider } from '../../context';
import styles from './Map.scss';

const Map = ({
  children,
  height,
  xMax,
  xMin,
  yMax,
  yMin,
  width,
}) => (
  <GraphProvider
    height={height}
    xMin={xMin}
    xMax={xMax}
    yMin={yMin}
    yMax={yMax}
    width={width}

  >
    <svg
      className={styles.map}
      height={height}
      width={width}
      viewBox={`0 0 ${width} ${height}`}
    >
      {children}
    </svg>
  </GraphProvider>
);

Map.defaultProps = {
  children: null,
};

Map.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  xMax: PropTypes.number.isRequired,
  xMin: PropTypes.number.isRequired,
  yMax: PropTypes.number.isRequired,
  yMin: PropTypes.number.isRequired,
};

export default Map;
