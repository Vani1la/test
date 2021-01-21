import React from 'react';
import { SortableHandler } from '@components/sortable';
import clsx from 'clsx';
import { $extensiveLineCounter } from '@store/editor/editor';
import { useStore } from 'effector-react';
import styles from './actions.module.scss';

type Props = {
  className?: string;
};

const Actions: React.FC<Props> = ({ className }) => {
  const extensiveLineCounter = useStore($extensiveLineCounter);
  return (
    <div className={clsx(styles.Actions, className)} style={{ left: extensiveLineCounter ? '-4.5em' : '-3.8em' }}>
      <SortableHandler className={styles.draggableIcon} />
    </div>
  );
};

export default React.memo(Actions);
