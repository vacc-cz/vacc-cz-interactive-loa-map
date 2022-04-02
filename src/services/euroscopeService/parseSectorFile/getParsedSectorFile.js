import { getRawSectorFileData } from './_helpers/getRawSectorFileData';
import { getFixes } from './_helpers/getFixes';
import { getNdb } from './_helpers/getNdb';
import { getVor } from './_helpers/getVor';
import { getAirports } from './_helpers/getAirports';
import { getRunways } from './_helpers/getRunways';
import { getArtcc } from './_helpers/getArtcc';
import { getAirways } from './_helpers/getAirways';
import { getDefinitions } from './_helpers/getDefinitions';

/**
 * Parse sector file.
 *
 * @param sectorFileData
 * @returns {{
 *  _definitions: {},
 *  airports: {},
 *  artcc: {},
 *  artccHigh: {},
 *  artccLow: {},
 *  airwaysHigh: {},
 *  airwaysLow: {},
 *  fixes: {},
 *  ndb: {},
 *  runways: {},
 *  vor: {}
 * }}
 */
export const getParsedSectorFile = (sectorFileData) => {
  const sectorFileRawData = getRawSectorFileData(sectorFileData);
  const definitions = getDefinitions(sectorFileRawData['#define']);

  const fixes = getFixes(sectorFileRawData.FIXES);
  const ndb = getNdb(sectorFileRawData.NDB);
  const vor = getVor(sectorFileRawData.VOR);
  const navigationPoints = {
    ...fixes,
    ...ndb,
    ...vor,
  };

  return {
    _definitions: definitions,
    airports: getAirports(sectorFileRawData.AIRPORT),
    airwaysHigh: getAirways(sectorFileRawData['HIGH AIRWAY'], navigationPoints),
    airwaysLow: getAirways(sectorFileRawData['LOW AIRWAY'], navigationPoints),
    artcc: getArtcc(sectorFileRawData.ARTCC, navigationPoints, definitions),
    artccHigh: getArtcc(sectorFileRawData['ARTCC HIGH'], navigationPoints, definitions),
    artccLow: getArtcc(sectorFileRawData['ARTCC LOW'], navigationPoints, definitions),
    fixes,
    ndb,
    runways: getRunways(sectorFileRawData.RUNWAY),
    vor,
  };
};
