import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import clsx from 'clsx';
import styles from './sortable-item.module.scss';

type Props = {
  index: number;
  className?: string;
};

const SortableItem: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx(styles.wrap, className)}>{children}</div>;
};

export default SortableElement(React.memo(SortableItem));
