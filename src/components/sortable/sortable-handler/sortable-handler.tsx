import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import icons from '@components/svg';
import { $editorTheme } from '@store/editor/editor';
import { useStore } from 'effector-react';
import styles from './sortable-handler.module.scss';

type Props = {
  className?: string;
};

const SortableHandler: React.FC<Props> = ({ className }) => {
  const white = useStore($editorTheme);
  return (
    <div className={className}>
      <icons.sprite.Draggable width={11} className={white ? styles.blackHandler : styles.whiteHandler} />
    </div>
  );
};

export default SortableHandle(React.memo(SortableHandler));
