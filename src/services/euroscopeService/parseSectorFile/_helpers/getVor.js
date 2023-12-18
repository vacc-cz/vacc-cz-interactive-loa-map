import { transformCoordinateToDegDec } from '../../../coordinatesService/transformCoordinateToDegDec';

/**
 * Get VORs from raw data lines.
 *
 * @param rawDataLines
 * @returns {{}}
 */
export const getVor = (rawDataLines) => {
  const vor = {};

  rawDataLines.forEach((rawDataLine) => {
    const [
      name,
      frequency,
      latitude,
      longitude,
    ] = rawDataLine.split(/\s+/g);

    try {
      vor[name] = {
        frequency,
        latitude: transformCoordinateToDegDec(latitude),
        longitude: transformCoordinateToDegDec(longitude),
        name,
      };
    } catch (e) {
      console.error(`Error while parsing VOR ${name}!`, e);
    }
  });

  return vor;
};
