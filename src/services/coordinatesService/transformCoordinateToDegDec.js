/**
 * Transforms the coordinate from the degMinSecDec to the degDec format (e.g. "N015.05.20.000" -> 15.088888888888889).
 *
 * @param degMinSecDec
 * @returns {number}
 */
export const transformCoordinateToDegDec = (degMinSecDec) => {
  const coordinateParts = degMinSecDec.split('.');

  const degreeValue = parseInt(coordinateParts[0].replace(/[NESW](.+)/, '$1'), 10);
  const minuteValue = parseFloat(coordinateParts[1]);
  const secondValue = parseFloat(coordinateParts[2]);
  const secondDecimalValue = parseFloat(coordinateParts[3]) / Math.pow(10, coordinateParts[3].length);

  let degDec = degreeValue + (minuteValue + ((secondValue + secondDecimalValue) / 60)) / 60;

  if (degMinSecDec.includes('S') || degMinSecDec.includes('W')) {
    degDec *= -1;
  }

  return degDec;
};
