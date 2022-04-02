import { transformCoordinateToDegDec } from '../../../coordinatesService/transformCoordinateToDegDec';

/**
 * Get runways from raw data lines.
 *
 * @param rawDataLines
 * @returns {{}}
 */
export const getRunways = (rawDataLines) => {
  const runways = {};

  rawDataLines.forEach((rawDataLine) => {
    const [
      runway,
      oppositeRunway,
      runwayHeading,
      oppositeRunwayHeading,
      runwayLatitude,
      runwayLongitude,
      oppositeRunwayLatitude,
      oppositeRunwayLongitude,
      airport,
    ] = rawDataLine.split(/\s+/g);

    if (!(airport in runways)) {
      runways[airport] = [];
    }

    runways[airport].push({
      airport,
      oppositeRunway,
      oppositeRunwayHeading,
      oppositeRunwayLatitude: transformCoordinateToDegDec(oppositeRunwayLatitude),
      oppositeRunwayLongitude: transformCoordinateToDegDec(oppositeRunwayLongitude),
      runway,
      runwayHeading,
      runwayLatitude: transformCoordinateToDegDec(runwayLatitude),
      runwayLongitude: transformCoordinateToDegDec(runwayLongitude),
    });
  });

  return runways;
};
