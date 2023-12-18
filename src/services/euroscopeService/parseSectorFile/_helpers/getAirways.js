import { getResolvedCoordinateInDegDec } from './getResolvedCoordinateInDegDec';

/**
 * Get airways from raw data lines.
 *
 * @param rawDataLines
 * @param navigationPoints
 * @returns {{}}
 */
export const getAirways = (rawDataLines, navigationPoints) => {
  const airways = {};

  rawDataLines.forEach((rawDataLine) => {
    const [
      name,
      latitudeStart,
      longitudeStart,
      latitudeEnd,
      longitudeEnd,
    ] = rawDataLine.split(/\s+/g);

    if (!(name in airways)) {
      airways[name] = [];
    }

    try {
      airways[name].push({
        latitudeEnd: getResolvedCoordinateInDegDec(latitudeEnd, 'latitude', navigationPoints),
        latitudeStart: getResolvedCoordinateInDegDec(latitudeStart, 'latitude', navigationPoints),
        longitudeEnd: getResolvedCoordinateInDegDec(longitudeEnd, 'longitude', navigationPoints),
        longitudeStart: getResolvedCoordinateInDegDec(longitudeStart, 'longitude', navigationPoints),
      });
    } catch (e) {
      console.error(`Error while parsing airway ${name}!`, e);
    }
  });

  return airways;
};
