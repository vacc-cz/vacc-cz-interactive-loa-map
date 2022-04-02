/**
 * Parse sector file and returns raw lines grouped by types.
 *
 * @param sectorFileData
 * @returns {{'#define': *[]}}
 */
export const getRawSectorFileData = (sectorFileData) => {
  const sectorFile = {
    '#define': [],
  };

  const lines = sectorFileData.match(/[^\r\n]+/g);
  let currentLineType = null;

  lines.forEach((line) => {
    let currentLine = line;

    // Remove comment from data
    if (currentLine.includes(';')) {
      currentLine = currentLine.substring(0, currentLine.indexOf(';')).trimEnd();
    }

    // Check if line contains definition of type, if yes, set current line type
    const currentLineTypeMatch = currentLine.match(/\[[a-zA-Z ]+]/);

    if (currentLineTypeMatch !== null) {
      currentLineType = currentLineTypeMatch[0].replace('[', '').replace(']', '');
      return;
    }

    // Skip lines without definition of type
    if (currentLineType === null) {
      return;
    }

    // If special #define line is present, save it immediately and skip rest
    if (currentLine.includes('#define')) {
      sectorFile['#define'].push(currentLine.replace('#define', '').trim());
      return;
    }

    // If definition type does not exist in parsed data, create it
    if (!(currentLineType in sectorFile)) {
      sectorFile[currentLineType] = [];
    }

    if (currentLine.trim().length > 0) {
      sectorFile[currentLineType].push(currentLine);
    }
  });

  return sectorFile;
};
