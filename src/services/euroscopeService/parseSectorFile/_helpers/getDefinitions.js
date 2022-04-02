/**
 * Get definitions from raw data lines.
 *
 * @param rawDataLines
 * @returns {{}}
 */
export const getDefinitions = (rawDataLines) => {
  const definitions = {};

  rawDataLines.forEach((rawDataLine) => {
    const [
      name,
      value,
    ] = rawDataLine.split(/\s+/g);

    definitions[name] = value;
  });

  return definitions;
};
