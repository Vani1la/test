import React from 'react';
import styles from './row.module.scss';

type Props = {
  html: string;
  onClick: (e?: MouseEvent) => void;
};

const Row: React.FC<Props> = ({ html, onClick }) => {
  return <div className={styles.Row} dangerouslySetInnerHTML={{ __html: html }} onClick={onClick as any} />;
};

export default React.memo(Row);
