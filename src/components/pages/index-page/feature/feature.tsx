import React from 'react';
import clsx from 'clsx';
import styles from './feature.module.scss';

type Props = {
  svg: any;
  desc: any;
};

const Feature: React.FC<Props> = ({ svg, desc }) => {
  return (
    <div className={styles.Feature}>
      <div className={clsx(styles.picture, 'd-flex jc-c ai-c')}>
        <div>{svg}</div>
      </div>
      <div className={styles.text}>{desc}</div>
    </div>
  );
};

export default React.memo(Feature);
