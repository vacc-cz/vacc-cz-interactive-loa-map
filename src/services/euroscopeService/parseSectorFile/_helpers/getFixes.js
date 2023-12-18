import { transformCoordinateToDegDec } from '../../../coordinatesService/transformCoordinateToDegDec';

/**
 * Get navigation fixes from raw data lines.
 *
 * @param rawDataLines
 * @returns {{}}
 */
export const getFixes = (rawDataLines) => {
  const fixes = {};

  rawDataLines.forEach((rawDataLine) => {
    const [
      name,
      latitude,
      longitude,
    ] = rawDataLine.split(/\s+/g);

    try {
      fixes[name] = {
        latitude: transformCoordinateToDegDec(latitude),
        longitude: transformCoordinateToDegDec(longitude),
        name,
      };
    } catch (e) {
      console.error(`Error parsing fix ${name}: ${e.message}`);
    }
  });

  return fixes;
};
