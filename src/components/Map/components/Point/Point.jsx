import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { MapContext } from '../../context';
import { transformCoordinateToDegDec } from '../../../../services/coordinatesService/transformCoordinateToDegDec';
import { getProjectedValue } from '../../helpers/getProjectedValue';
import styles from './Point.scss';

const Point = ({
  latitude,
  longitude,
  name,
  onClick,
  position,
}) => {
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

  const y = transformCoordinateToDegDec(latitude);
  const x = transformCoordinateToDegDec(longitude);

  return (
    <>
      <rect
        className={styles.point}
        onClick={onClick}
        x={tX(getProjectedValue(x, xMin, xMax, width).value) - 5}
        y={tY(getProjectedValue(y, yMin, yMax, height).value) - 5}
        height={10}
        width={10}
      />
      {position === 'left' && (
        <text
          className={styles.pointLabelLeft}
          x={tX(getProjectedValue(x, xMin, xMax, width).value) - 10}
          y={tY(getProjectedValue(y, yMin, yMax, height).value)}
        >
          {name}
        </text>
      )}
      {position === 'right' && (
        <text
          className={styles.pointLabelRight}
          x={tX(getProjectedValue(x, xMin, xMax, width).value) + 10}
          y={tY(getProjectedValue(y, yMin, yMax, height).value) + 10}
        >
          {name}
        </text>
      )}
    </>
  );
};

Point.defaultProps = {
  position: 'left'
};

Point.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.string,
};

export default Point;
