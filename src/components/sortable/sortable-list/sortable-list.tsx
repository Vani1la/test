import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
// import styles from './sortable-list.module.scss';

type Props = {
  className?: string;
};

const SortableList: React.FC<Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default SortableContainer(React.memo(SortableList));
