import React, { useState } from 'react';
import { Modal } from '@react-ui-org/react-ui';
import styles from './PointModal.scss';

export const PointModal = ({
  coordination,
  name,
  onClose,
}) => {
  const {
    fir,
    inboundCoordination,
    outboundCoordination,
  } = coordination;
  const [selectedPointData, setSelectedPointData] = useState(null);

  let leftColumnRows = outboundCoordination != null && outboundCoordination.data != null
    ? outboundCoordination.data.length
    : 0;
  let rightColumnsRows = inboundCoordination != null && inboundCoordination.data != null
    ? inboundCoordination.data.length
    : 0;

  return (
    <Modal
      onClose={onClose}
      size="large"
      title={name}
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th
              className={styles.outboundHead}
              colSpan={2}
            >
              LKAA -> {fir}
            </th>
            <th
              className={styles.inboundHead}
              colSpan={2}
            >
              {fir} -> LKAA
            </th>
          </tr>
          {[...Array(Math.max(leftColumnRows, rightColumnsRows)).keys()].map((i) => (
            <tr>
              {(outboundCoordination?.data == null || outboundCoordination?.data[i] == null) && (
                <td
                  className={styles.outboundCellWide}
                  colSpan={2}
                />
              )}
              {outboundCoordination?.data != null && outboundCoordination?.data[i] != null && (
                <>
                  <td className={styles.outboundCell}>
                    {outboundCoordination?.data[i].type === 'DEPARTURE' && '↑'}
                    {outboundCoordination?.data[i].type === 'ARRIVAL' && '↓'}
                    {outboundCoordination?.data[i].text}
                  </td>
                  <td className={styles.outboundCell}>
                    {outboundCoordination?.data[i].level && (
                      <u>{outboundCoordination?.data[i].level}</u>
                    )}
                    {outboundCoordination?.data[i].levelMax && (
                      <u>max {outboundCoordination?.data[i].levelMax}</u>
                    )}
                    {outboundCoordination?.data[i].levelDown && (
                      <span>↓{outboundCoordination?.data[i].levelDown}</span>
                    )}
                    {outboundCoordination?.data[i].levelBellow && (
                      <span>{outboundCoordination?.data[i].levelBellow}B</span>
                    )}
                    {outboundCoordination?.data[i].levelUp && (
                      <span>↑{outboundCoordination?.data[i].levelUp}</span>
                    )}
                    {outboundCoordination?.data[i].levelAbove && (
                      <span>{outboundCoordination?.data[i].levelAbove}A</span>
                    )}
                    {outboundCoordination?.data[i].note && (
                      <div>{outboundCoordination?.data[i].note}</div>
                    )}
                  </td>
                </>
              )}
              {(inboundCoordination?.data == null || inboundCoordination?.data[i] == null) && (
                <td
                  className={styles.inboundCellWide}
                  colSpan={2}
                />
              )}
              {inboundCoordination?.data != null && inboundCoordination?.data[i] != null && (
                <>
                  <td className={styles.inboundCell}>
                    {inboundCoordination?.data[i].type === 'DEPARTURE' && '↑'}
                    {inboundCoordination?.data[i].type === 'ARRIVAL' && '↓'}
                    {inboundCoordination?.data[i].text}
                  </td>
                  <td className={styles.inboundCell}>
                    {inboundCoordination?.data[i].level && (
                      <u>{inboundCoordination?.data[i].level}</u>
                    )}
                    {inboundCoordination?.data[i].levelMax && (
                      <u>max {inboundCoordination?.data[i].levelMax}</u>
                    )}
                    {inboundCoordination?.data[i].levelDown && (
                      <span>↓{inboundCoordination?.data[i].levelDown}</span>
                    )}
                    {inboundCoordination?.data[i].levelBellow && (
                      <span>{inboundCoordination?.data[i].levelBellow}B</span>
                    )}
                    {inboundCoordination?.data[i].levelUp && (
                      <span>↑{inboundCoordination?.data[i].levelUp}</span>
                    )}
                    {inboundCoordination?.data[i].levelAbove && (
                      <span>{inboundCoordination?.data[i].levelAbove}A</span>
                    )}
                    {inboundCoordination?.data[i].note && (
                      <div>{inboundCoordination?.data[i].note}</div>
                    )}
                  </td>
                </>
              )}
            </tr>
          ))}
          {(outboundCoordination?.note != null || inboundCoordination?.note != null) && (
            <tr>
              <td
                className={styles.outboundCellWide}
                colSpan={2}
              >
                {outboundCoordination?.note}
              </td>
              <td
                className={styles.inboundCellWide}
                colSpan={2}
              >
                {inboundCoordination?.note}
              </td>
            </tr>
          )}
        </thead>
      </table>
    </Modal>
  );
};

export default PointModal;
