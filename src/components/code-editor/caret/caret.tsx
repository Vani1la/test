import React, { useEffect, useMemo, useRef } from 'react';
import { useStore } from 'effector-react';
import clsx from 'clsx';
import { setIsVisibleCaret, $isVisibleCaret, $positionCaretCSS } from '@store/editor/caret';
import { $editorTheme, keyEvent } from '@store/editor/editor';
import styles from './caret.module.scss';

type Props = {};

const Caret: React.FC<Props> = () => {
  const isVisible = useStore($isVisibleCaret);
  const positionStyle = useStore($positionCaretCSS);
  const refIntervalId = useRef<number>();
  const whiteTheme = useStore($editorTheme);
  const memoState = useMemo(() => ({ timeoutId: null }), []);

  const caretStartBlink = () => {
    clearTimeout(memoState.timeoutId);
    setIsVisibleCaret(true);
    memoState.timeoutId = setTimeout(setIsVisibleCaret, 530, false);
  };

  useEffect(() => {
    caretStartBlink();
    refIntervalId.current = window.setInterval(caretStartBlink, 1060);

    keyEvent.watch(() => {
      caretStartBlink();
    });

    return () => {
      clearTimeout(memoState.timeoutId);
      clearInterval(refIntervalId.current);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return <span style={positionStyle} className={clsx(styles.wrap, { [styles.white]: whiteTheme })} />;
};

export default React.memo(Caret);
