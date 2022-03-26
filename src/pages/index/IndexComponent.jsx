import React, { useState } from 'react';
import {
  Fir,
  Map,
  Point,
} from '../../components/Map';
import { PointModal } from '../../components/PointModal';
import fir from '../../data/fir.json';
import points from '../../data/points.json';
import styles from './styles.scss';

export const IndexComponent = () => {
  const xMin = 12;
  const xMax = 19.15;
  const yMin = 48.5;
  const yMax = 51.25;

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
        <Fir points={fir} />
        {points.map((point) => (
          <Point
            {...point}
            key={point.name}
            onClick={() => {
              setSelectedPointData(point);
            }}
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
