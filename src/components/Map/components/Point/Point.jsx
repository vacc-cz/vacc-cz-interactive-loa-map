import PropTypes from 'prop-types';
import React, {
  memo,
  useContext,
} from 'react';
import { MapContext } from '../../context';
import { getProjectedValue } from '../../helpers/getProjectedValue';
import styles from './Point.scss';

const LABEL_POSITIONS = {
  bottom: {
    textAnchor: 'middle',
    x: 0,
    y: 17,
  },
  bottomLeft: {
    textAnchor: 'end',
    x: -10,
    y: 12,
  },
  bottomRight: {
    textAnchor: 'start',
    x: 10,
    y: 12,
  },
  left: {
    textAnchor: 'end',
    x: -10,
    y: 4,
  },
  right: {
    textAnchor: 'start',
    x: 10,
    y: 4,
  },
  top: {
    textAnchor: 'middle',
    x: 0,
    y: -10,
  },
  topLeft: {
    textAnchor: 'end',
    x: -10,
    y: -5,
  },
  topRight: {
    textAnchor: 'start',
    x: 10,
    y: -5,
  },
};

const Point = ({
  coordination,
  name,
  navigationPoints,
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

  const coordinate = navigationPoints[name];
  if (coordinate == null) {
    // eslint-disable-next-line no-console
    console.warn(`Unable to render '${name}'.`);
    return null;
  }

  return (
    <>
      <rect
        className={coordination !== null ? styles.point : styles.pointWithoutCoordination}
        onClick={coordination !== null ? onClick : () => {}}
        x={tX(getProjectedValue(coordinate.longitude, xMin, xMax, width).value) - 5}
        y={tY(getProjectedValue(coordinate.latitude, yMin, yMax, height).value) - 5}
        height={10}
        width={10}
      />
      <text
        textAnchor={LABEL_POSITIONS[position].textAnchor}
        x={tX(getProjectedValue(coordinate.longitude, xMin, xMax, width).value) + LABEL_POSITIONS[position].x}
        y={tY(getProjectedValue(coordinate.latitude, yMin, yMax, height).value) + LABEL_POSITIONS[position].y}
      >
        {name}
      </text>
    </>
  );
};

Point.defaultProps = {
  coordination: null,
  position: 'bottomLeft',
};

Point.propTypes = {
  coordination: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  navigationPoints: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.string,
};

export default memo(Point, () => true);
