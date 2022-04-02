import { transformCoordinateToDegDec } from '../../../coordinatesService/transformCoordinateToDegDec';

/**
 * Get NDBs from raw data lines.
 *
 * @param rawDataLines
 * @returns {{}}
 */
export const getNdb = (rawDataLines) => {
  const ndb = {};

  rawDataLines.forEach((rawDataLine) => {
    const [
      name,
      frequency,
      latitude,
      longitude,
    ] = rawDataLine.split(/\s+/g);

    ndb[name] = {
      frequency,
      latitude: transformCoordinateToDegDec(latitude),
      longitude: transformCoordinateToDegDec(longitude),
      name,
    };
  });

  return ndb;
};
