import { transformCoordinateToDegDec } from '../../../coordinatesService/transformCoordinateToDegDec';

/**
 * If coordinate is one of navigation points, returns its latitude/longitude. Otherwise, transform entered coordinate.
 *
 * @param coordinate
 * @param type
 * @param navigationPoints
 * @returns {number|*}
 */
export const getResolvedCoordinateInDegDec = (coordinate, type, navigationPoints) => {
  const resolvedCoordinate = navigationPoints[coordinate];

  if (resolvedCoordinate != null) {
    return resolvedCoordinate[type];
  }

  return transformCoordinateToDegDec(coordinate);
};
