import { getResolvedCoordinateInDegDec } from './getResolvedCoordinateInDegDec';

/**
 * Get airspace from raw data lines.
 *
 * @param rawDataLines
 * @param navigationPoints
 * @param definitions
 * @returns {{}}
 */
export const getArtcc = (rawDataLines, navigationPoints, definitions) => {
  const artcc = {};
  let lastArtccName = null;

  rawDataLines.forEach((rawDataLine) => {
    const rawDataLineSplit = rawDataLine.split(/\s+/g);
    const hasColor = rawDataLineSplit[rawDataLineSplit.length - 1] in definitions;

    let name;
    let latitudeStart;
    let longitudeStart;
    let latitudeEnd;
    let longitudeEnd;
    let color = null;

    if (hasColor) {
      name = rawDataLineSplit.slice(0, rawDataLineSplit.length - 5).join(' ');
      latitudeStart = rawDataLineSplit[rawDataLineSplit.length - 5];
      longitudeStart = rawDataLineSplit[rawDataLineSplit.length - 4];
      latitudeEnd = rawDataLineSplit[rawDataLineSplit.length - 3];
      longitudeEnd = rawDataLineSplit[rawDataLineSplit.length - 2];
      color = rawDataLineSplit[rawDataLineSplit.length - 1];
    } else {
      name = rawDataLineSplit.slice(0, rawDataLineSplit.length - 4).join(' ');
      latitudeStart = rawDataLineSplit[rawDataLineSplit.length - 4];
      longitudeStart = rawDataLineSplit[rawDataLineSplit.length - 3];
      latitudeEnd = rawDataLineSplit[rawDataLineSplit.length - 2];
      longitudeEnd = rawDataLineSplit[rawDataLineSplit.length - 1];
    }

    if (name !== null && name !== '') {
      lastArtccName = name;
    }

    if (lastArtccName === null) {
      return;
    }

    if (!(lastArtccName in artcc)) {
      artcc[lastArtccName] = [];
    }

    artcc[lastArtccName].push({
      color,
      latitudeEnd: getResolvedCoordinateInDegDec(latitudeEnd, 'latitude', navigationPoints),
      latitudeStart: getResolvedCoordinateInDegDec(latitudeStart, 'latitude', navigationPoints),
      longitudeEnd: getResolvedCoordinateInDegDec(longitudeEnd, 'longitude', navigationPoints),
      longitudeStart: getResolvedCoordinateInDegDec(longitudeStart, 'longitude', navigationPoints),
    });
  });

  return artcc;
};
