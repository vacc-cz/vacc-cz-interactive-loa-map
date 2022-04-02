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

    vor[name] = {
      frequency,
      latitude: transformCoordinateToDegDec(latitude),
      longitude: transformCoordinateToDegDec(longitude),
      name,
    };
  });

  return vor;
};
