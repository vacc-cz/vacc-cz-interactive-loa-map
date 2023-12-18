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

    try {
      ndb[name] = {
        frequency,
        latitude: transformCoordinateToDegDec(latitude),
        longitude: transformCoordinateToDegDec(longitude),
        name,
      };
    } catch (e) {
      console.error(`Error while parsing NDB ${name}!`, e);
    }
  });

  return ndb;
};
