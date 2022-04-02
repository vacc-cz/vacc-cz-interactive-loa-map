import React, {
  useState,
  useMemo,
} from 'react';
import {
  Airspace,
  Map,
  Point,
} from '../../components/Map';
import { PointModal } from '../../components/PointModal';
import { getParsedSectorFile } from '../../services/euroscopeService/parseSectorFile';
import points from '../../data/points.json';
import sectorFile from '../../data/sector_file.sct';
import styles from './styles.scss';

export const IndexComponent = () => {
  const xMin = 11.85;
  const xMax = 19.25;
  const yMin = 48.5;
  const yMax = 51.25;

  const parsedSectorFile = useMemo(() => getParsedSectorFile(sectorFile), []);
  const navigationPoints = useMemo(() => ({
    ...parsedSectorFile.fixes,
    ...parsedSectorFile.ndb,
    ...parsedSectorFile.vor,
  }), []); // eslint-disable-line react-hooks/exhaustive-deps

  const [selectedPointData, setSelectedPointData] = useState(null);

  return (
    <div className={styles.root}>
      <Map
        height={550}
        xMin={xMin}
        xMax={xMax}
        yMin={yMin}
        yMax={yMax}
        width={900}
      >
        {['LKAA_CTR', 'LKAA_TMA'].map((name) => (
          <Airspace
            color="default"
            key={name}
            points={parsedSectorFile.artccLow[name]}
          />
        ))}
        {['EDMM_CTR', 'EPWW_CTR', 'LOVV_CTR', 'LZBB_CTR'].map((name) => (
          <Airspace
            color="secondary"
            key={name}
            points={parsedSectorFile.artccHigh[name]}
          />
        ))}
        {['LKAA_H_SECTORS', 'LKAA_L_SECTORS'].map((name) => (
          <Airspace
            color="primary"
            key={name}
            points={parsedSectorFile.artccHigh[name]}
          />
        ))}
        {points.map((point) => (
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
    </div>
  );
};

export default IndexComponent;
