/**
 * Get definitions from raw data lines.
 *
 * @param rawDataLines
 * @returns {{}}
 */
export const getDefinitions = (rawDataLines) => {
  const definitions = {};

  rawDataLines.forEach((rawDataLine) => {
    try {
      const [
        name,
        value,
      ] = rawDataLine.split(/\s+/g);

      definitions[name] = value;
    } catch (e) {
      console.error(`Error while parsing definition ${rawDataLine}!`, e);
    }
  });

  return definitions;
};
