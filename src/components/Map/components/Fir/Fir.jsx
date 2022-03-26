import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { MapContext } from '../../context';
import { transformCoordinateToDegDec } from '../../../../services/coordinatesService/transformCoordinateToDegDec';
import { getProjectedValue } from '../../helpers/getProjectedValue';
import styles from './Fir.scss';

const Fir = ({ points }) => {
  const {
    height,
    tX,
    tY,
    width,
    xMin,
    xMax,
    yMin,
    yMax,
  } = useContext(MapContext);

  return (
    <g>
      {points.map((point) => {
        const lat1 = transformCoordinateToDegDec(point.latitude1);
        const lon1 = transformCoordinateToDegDec(point.longitude1);
        const lat2 = transformCoordinateToDegDec(point.latitude2);
        const lon2 = transformCoordinateToDegDec(point.longitude2);

        const pX1 = getProjectedValue(lon1, xMin, xMax, width).value;
        const pY1 = getProjectedValue(lat1, yMin, yMax, height).value;
        const pX2 = getProjectedValue(lon2, xMin, xMax, width).value;
        const pY2 = getProjectedValue(lat2, yMin, yMax, height).value;

        const x1 = tX(pX1);
        const y1 = tY(pY1);
        const x2 = tX(pX2);
        const y2 = tY(pY2);

        return (
          <line
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke="#5c8e8c"
            strokeWidth={2}
          />
        );
      })}
    </g>
  );
};

Fir.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    latitude1: PropTypes.string.isRequired,
    latitude2: PropTypes.string.isRequired,
    longitude1: PropTypes.string.isRequired,
    longitude2: PropTypes.string.isRequired,
  })).isRequired,
};

export default Fir;
