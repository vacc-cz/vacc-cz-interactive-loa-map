import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import React, {
  memo,
  useContext,
} from 'react';
import { MapContext } from '../../context';
import { getProjectedValue } from '../../helpers/getProjectedValue';
import styles from './Airspace.scss';

const Airspace = ({
  color,
  points,
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

  let className = styles.isRootDefault;
  if (color === 'primary') {
    className = styles.isRootPrimary;
  } else if (color === 'secondary') {
    className = styles.isRootSecondary;
  }

  return (
    <g>
      {points.map((point) => (
        <line
          className={className}
          key={nanoid()}
          x1={tX(getProjectedValue(point.longitudeStart, xMin, xMax, width).value)}
          x2={tX(getProjectedValue(point.longitudeEnd, xMin, xMax, width).value)}
          y1={tY(getProjectedValue(point.latitudeStart, yMin, yMax, height).value)}
          y2={tY(getProjectedValue(point.latitudeEnd, yMin, yMax, height).value)}
        />
      ))}
    </g>
  );
};

Airspace.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'default']).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    latitudeEnd: PropTypes.number.isRequired,
    latitudeStart: PropTypes.number.isRequired,
    longitudeEnd: PropTypes.number.isRequired,
    longitudeStart: PropTypes.number.isRequired,
  })).isRequired,
};

export default memo(Airspace, () => true);
