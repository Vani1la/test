import React from 'react';
import clsx from 'clsx';
import { $selectBlocks } from '@store/editor/select';
import { $editorTheme } from '@store/editor/editor';
import { useStore } from 'effector-react';
import styles from './select.module.scss';

type Props = {};

const Select: React.FC<Props> = () => {
  const selectBlocks = useStore($selectBlocks);
  const whiteTheme = useStore($editorTheme);
  return (
    <div className="absolute">
      {selectBlocks.map((line) => (
        <div
          className={clsx(styles.Select, { [styles.selectWhite]: whiteTheme })}
          style={{ width: line.width, top: line.top, left: line.left }}
          key={line.id}
        />
      ))}
    </div>
  );
};

export default React.memo(Select);
