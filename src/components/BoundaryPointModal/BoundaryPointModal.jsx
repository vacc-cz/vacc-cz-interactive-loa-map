import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from '@react-ui-org/react-ui';
import styles from './BoundaryPointModal.scss';

export const BoundaryPointModal = ({
  coordination,
  name,
  onClose,
}) => (
  <Modal
    onClose={onClose}
    size="large"
    title={name}
  >
    <table className={styles.table}>
      <tbody>
        {coordination.data.map((item) => (
          <tr>
            <td className={styles.outboundCell}>
              {item.type === 'departure' && '↑ '}
              {item.type === 'arrival' && '↓ '}
              {item.text}
            </td>
            <td className={styles.outboundCell}>
              {item.level && (
                <u>{item.level}</u>
              )}
              {item.levelMax && (
                <u>{`max ${item.levelMax}`}</u>
              )}
              {item.levelDown && (
                <span>{`↓${item.levelDown}`}</span>
              )}
              {item.levelBellow && (
                <span>{`${item.levelBellow}B`}</span>
              )}
              {item.levelUp && (
                <span>{`↑${item.levelUp}`}</span>
              )}
              {item.levelAbove && (
                <span>{`${item.levelAbove}A`}</span>
              )}
              {item.note && (
                <div>{item.note}</div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Modal>
);

BoundaryPointModal.propTypes = {
  coordination: PropTypes.shape({
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
  }).isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BoundaryPointModal;
