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

  const fixes = sectorFileRawData.FIXES ? getFixes(sectorFileRawData.FIXES) : null;
  const ndb = sectorFileRawData.NDB ? getNdb(sectorFileRawData.NDB) : null;
  const vor = sectorFileRawData.VOR ? getVor(sectorFileRawData.VOR) : null;
  const navigationPoints = {
    ...fixes,
    ...ndb,
    ...vor,
  };

  return {
    _definitions: definitions,
    airports: sectorFileRawData.AIRPORT ? getAirports(sectorFileRawData.AIRPORT) : null,
    airwaysHigh: sectorFileRawData['HIGH AIRWAY'] ? getAirways(sectorFileRawData['HIGH AIRWAY'], navigationPoints) : null,
    airwaysLow: sectorFileRawData['LOW AIRWAY'] ? getAirways(sectorFileRawData['LOW AIRWAY'], navigationPoints) : null,
    artcc: sectorFileRawData.ARTCC ? getArtcc(sectorFileRawData.ARTCC, navigationPoints, definitions) : null,
    artccHigh: sectorFileRawData['ARTCC HIGH'] ? getArtcc(sectorFileRawData['ARTCC HIGH'], navigationPoints, definitions) : null,
    artccLow: sectorFileRawData['ARTCC LOW'] ? getArtcc(sectorFileRawData['ARTCC LOW'], navigationPoints, definitions) : null,
    fixes,
    ndb,
    runways: sectorFileRawData.RUNWAY ? getRunways(sectorFileRawData.RUNWAY) : null,
    vor,
  };
};
