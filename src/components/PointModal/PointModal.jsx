import PropTypes from 'prop-types';
import React from 'react';
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

  const leftColumnRows = outboundCoordination != null && outboundCoordination.data != null
    ? outboundCoordination.data.length
    : 0;
  const rightColumnsRows = inboundCoordination != null && inboundCoordination.data != null
    ? inboundCoordination.data.length
    : 0;
  const maxRows = Math.max(leftColumnRows, rightColumnsRows);

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
              {`LKAA -> ${fir}`}
            </th>
            <th
              className={styles.inboundHead}
              colSpan={2}
            >
              {`${fir} -> LKAA`}
            </th>
          </tr>
          {[...Array(maxRows).keys()].map((i) => (
            <tr key={i}>
              {
                (outboundCoordination?.data == null || outboundCoordination?.data[i] == null)
                && i === leftColumnRows
                && (
                  <td
                    className={styles.outboundCellWide}
                    colSpan={2}
                    rowSpan={i < rightColumnsRows ? (maxRows - i) : 1}
                  />
                )
              }
              {outboundCoordination?.data != null && outboundCoordination?.data[i] != null && (
                <>
                  <td className={styles.outboundCell}>
                    {outboundCoordination?.data[i].type === 'departure' && '↑'}
                    {outboundCoordination?.data[i].type === 'arrivals' && '↓'}
                    {outboundCoordination?.data[i].text}
                  </td>
                  <td className={styles.outboundCell}>
                    {outboundCoordination?.data[i].level && (
                      <u>{outboundCoordination?.data[i].level}</u>
                    )}
                    {outboundCoordination?.data[i].levelMax && (
                      <u>{`max ${outboundCoordination?.data[i].levelMax}`}</u>
                    )}
                    {outboundCoordination?.data[i].levelDown && (
                      <span>{`↓${outboundCoordination?.data[i].levelDown}`}</span>
                    )}
                    {outboundCoordination?.data[i].levelBellow && (
                      <span>{`${outboundCoordination?.data[i].levelBellow}B`}</span>
                    )}
                    {outboundCoordination?.data[i].levelUp && (
                      <span>{`↑${outboundCoordination?.data[i].levelUp}`}</span>
                    )}
                    {outboundCoordination?.data[i].levelAbove && (
                      <span>{`${outboundCoordination?.data[i].levelAbove}A`}</span>
                    )}
                    {outboundCoordination?.data[i].note && (
                      <div>{outboundCoordination?.data[i].note}</div>
                    )}
                  </td>
                </>
              )}
              {
                (inboundCoordination?.data == null || inboundCoordination?.data[i] == null)
                && i === rightColumnsRows
                && (
                  <td
                    className={styles.inboundCellWide}
                    colSpan={2}
                    rowSpan={i < leftColumnRows ? (maxRows - i) : 1}
                  />
                )
              }
              {inboundCoordination?.data != null && inboundCoordination?.data[i] != null && (
                <>
                  <td className={styles.inboundCell}>
                    {inboundCoordination?.data[i].type === 'departure' && '↑'}
                    {inboundCoordination?.data[i].type === 'arrival' && '↓'}
                    {inboundCoordination?.data[i].text}
                  </td>
                  <td className={styles.inboundCell}>
                    {inboundCoordination?.data[i].level && (
                      <u>{inboundCoordination?.data[i].level}</u>
                    )}
                    {inboundCoordination?.data[i].levelMax && (
                      <u>{`max ${inboundCoordination?.data[i].levelMax}`}</u>
                    )}
                    {inboundCoordination?.data[i].levelDown && (
                      <span>{`↓${inboundCoordination?.data[i].levelDown}`}</span>
                    )}
                    {inboundCoordination?.data[i].levelBellow && (
                      <span>{`${inboundCoordination?.data[i].levelBellow}B`}</span>
                    )}
                    {inboundCoordination?.data[i].levelUp && (
                      <span>{`↑${inboundCoordination?.data[i].levelUp}`}</span>
                    )}
                    {inboundCoordination?.data[i].levelAbove && (
                      <span>{`${inboundCoordination?.data[i].levelAbove}A`}</span>
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

PointModal.propTypes = {
  coordination: PropTypes.shape({
    fir: PropTypes.string.isRequired,
    inboundCoordination: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        level: PropTypes.number,
        levelAbove: PropTypes.number,
        levelBellow: PropTypes.number,
        levelDown: PropTypes.number,
        levelMax: PropTypes.number,
        levelUp: PropTypes.number,
        note: PropTypes.string,
        text: PropTypes.string,
        type: PropTypes.oneOf(['departure', 'arrival']),
      })),
      note: PropTypes.string,
    }),
    outboundCoordination: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        level: PropTypes.number,
        levelAbove: PropTypes.number,
        levelBellow: PropTypes.number,
        levelDown: PropTypes.number,
        levelMax: PropTypes.number,
        levelUp: PropTypes.number,
        note: PropTypes.string,
        text: PropTypes.string,
        type: PropTypes.oneOf(['departure', 'arrival']),
      })),
      note: PropTypes.string,
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PointModal;
