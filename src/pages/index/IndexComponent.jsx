import React, {
  useState,
  useMemo,
} from 'react';
import {
  Airspace,
  BoundaryPoint,
  Map,
  Point,
} from '../../components/Map';
import { BoundaryPointModal } from '../../components/BoundaryPointModal';
import { PointModal } from '../../components/PointModal';
import { getParsedSectorFile } from '../../services/euroscopeService/parseSectorFile';
import config from '../../../config/config.json';
import sectorFile from '../../../config/sector_file.sct';
import styles from './styles.scss';

export const IndexComponent = () => {
  const parsedSectorFile = useMemo(() => getParsedSectorFile(sectorFile), []);
  const navigationPoints = useMemo(() => ({
    ...parsedSectorFile.fixes,
    ...parsedSectorFile.ndb,
    ...parsedSectorFile.vor,
  }), []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log('Parsed config:', parsedSectorFile);

  const [selectedPointData, setSelectedPointData] = useState(null);
  const [selectedBoundaryPointData, setSelectedBoundaryPointData] = useState(null);

  return (
    <div className={styles.root}>
      <Map
        height={config.dimensions.height}
        xMin={config.viewport.minLongitude}
        xMax={config.viewport.maxLongitude}
        yMin={config.viewport.minLatitude}
        yMax={config.viewport.maxLatitude}
        width={config.dimensions.width}
      >
        {config.airspaces.other?.map((airspace) => (
          <Airspace
            color="default"
            key={airspace.name}
            points={parsedSectorFile[airspace.type][airspace.name]}
          />
        ))}
        {config.airspaces.secondary?.map((airspace) => (
          <Airspace
            color="secondary"
            key={airspace.name}
            points={parsedSectorFile[airspace.type][airspace.name]}
          />
        ))}
        {config.airspaces.primary?.map((airspace) => (
          <Airspace
            color="primary"
            key={airspace.name}
            points={parsedSectorFile[airspace.type][airspace.name]}
          />
        ))}
        {config.boundaryPoints.map((point) => (
          <BoundaryPoint
            {...point}
            key={point.name}
            onClick={() => { setSelectedBoundaryPointData(point); }}
          />
        ))}
        {config.points.map((point) => (
          <Point
            {...point}
            key={point.name}
            onClick={() => { setSelectedPointData(point); }}
            navigationPoints={navigationPoints}
          />
        ))}
      </Map>
      {selectedPointData && (
        <PointModal
          coordination={selectedPointData.coordination}
          name={selectedPointData.name}
          onClose={() => {
            setSelectedPointData(null);
          }}
        />
      )}
      {selectedBoundaryPointData && (
        <BoundaryPointModal
          coordination={selectedBoundaryPointData.coordination}
          name={selectedBoundaryPointData.name}
          onClose={() => {
            setSelectedBoundaryPointData(null);
          }}
        />
      )}
    </div>
  );
};

export default IndexComponent;
