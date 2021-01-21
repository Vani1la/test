import React from 'react';
import styles from './utils.module.scss';

type Props = {};

const Utils: React.FC<Props> = () => {
  return (
    <div className={styles.Utils}>
      <span id="fakeSpan" className={styles.fakeSpan} />
    </div>
  );
};

export default React.memo(Utils);
