import { transformCoordinateToDegDec } from '../../../coordinatesService/transformCoordinateToDegDec';

/**
 * Get airports from raw data lines.
 *
 * @param rawDataLines
 * @returns {{}}
 */
export const getAirports = (rawDataLines) => {
  const airports = {};

  rawDataLines.forEach((rawDataLine) => {
    const [
      name,
      towerFrequency,
      latitude,
      longitude,
      classAirspace,
    ] = rawDataLine.split(/\s+/g);

    airports[name] = {
      classAirspace,
      latitude: transformCoordinateToDegDec(latitude),
      longitude: transformCoordinateToDegDec(longitude),
      name,
      towerFrequency,
    };
  });

  return airports;
};
