import PropTypes from 'prop-types';
import React, {
  memo,
  useContext,
} from 'react';
import { MapContext } from '../../context';
import { transformCoordinateToDegDec } from '../../../../services/coordinatesService/transformCoordinateToDegDec';
import { getProjectedValue } from '../../helpers/getProjectedValue';
import styles from './BoundaryPoint.scss';

const BoundaryPoint = ({
  latitude,
  longitude,
  name,
  onClick,
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

  const elementWidth = (name.length * 8) + 10;

  return (
    <g className={styles.boundaryPoint}>
      <rect
        className={styles.box}
        height={25}
        onClick={onClick}
        x={tX(getProjectedValue(transformCoordinateToDegDec(longitude), xMin, xMax, width).value)}
        y={tY(getProjectedValue(transformCoordinateToDegDec(latitude), yMin, yMax, height).value)}
        width={elementWidth}
      />
      <text
        className={styles.label}
        onClick={onClick}
        x={tX(getProjectedValue(transformCoordinateToDegDec(longitude), xMin, xMax, width).value) + (elementWidth / 2)}
        y={tY(getProjectedValue(transformCoordinateToDegDec(latitude), yMin, yMax, height).value) + 16}
      >
        {name}
      </text>
    </g>
  );
};

BoundaryPoint.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(BoundaryPoint, () => true);
