import React from 'react';
import { SortableItem } from '@components/sortable';
import Actions from '@components/code-editor/actions';
import { $editorTheme } from '@store/editor/editor';
import { useStore } from 'effector-react';
import styles from './component-lines.module.scss';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  index: number;
  row: any;
};

const ComponentLines: React.FC<Props> = ({ children, index, row }) => {
  const whiteTheme = useStore($editorTheme);
  return (
    <SortableItem index={index} className={styles.ComponentLines}>
      <pre style={{ overflow: 'visible', position: 'relative' }}>
        {row.html ? <Actions className={whiteTheme ? styles.whiteActions : styles.actions} /> : ''}
        <div className={styles.lines}>{children}</div>
      </pre>
    </SortableItem>
  );
};

export default React.memo(ComponentLines);
