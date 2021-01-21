import React from 'react';
import clsx from 'clsx';
import { useStore } from 'effector-react';
import useDropdown from '@hooks/use-dropdown';
import { v4 as uuidv4 } from 'uuid';
import { $editorErrors, $viewIndexError, setViewIndexError } from '@store/editor/errors';
import { getIndexSymbolOfPx, getWidthOfStringInPx } from '@utils/js/string';
import { $textLines, $extensiveLineCounter } from '@store/editor/editor';
import { $cursorPosition } from '@store/editor/cursor';
import { setCaretPosition } from '@utils/js/textarea';
import Dropdown from '@components/dropdown/dropdown';
import styles from './errors.module.scss';

type Props = {
  textarea: HTMLElement;
  fakeSpan: HTMLElement;
};

const Errors: React.FC<Props> = ({ textarea, fakeSpan }) => {
  const errorsList = useStore($editorErrors);
  const viewIndex = useStore($viewIndexError);
  const { refContent, refTrigger } = useDropdown('GLOBAL_DROPDOWN_ID');
  const onClick = () => {
    const pos = getIndexSymbolOfPx(
      $textLines.getState(),
      fakeSpan,
      $cursorPosition.getState(),
      $extensiveLineCounter.getState(),
    );
    setCaretPosition(textarea, { start: pos, end: pos });
  };
  const onMouseEnter = (index) => {
    setViewIndexError(index);
  };
  const onMouseLeave = () => {
    setViewIndexError(-1);
  };
  return (
    <div>
      {fakeSpan ? (
        <div>
          {errorsList.map((errorInfo, index) => (
            <div
              key={uuidv4()}
              className={clsx(styles.errorText, 'absolute')}
              style={{
                top: errorInfo.top + 10,
                left: getWidthOfStringInPx(fakeSpan, errorInfo.leftStr) + 5,
                width: getWidthOfStringInPx(fakeSpan, errorInfo.errorTextWidthStr),
              }}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={onMouseLeave}
              onClick={onClick}
            />
          ))}
          {errorsList[viewIndex] ? (
            <Dropdown
              key={uuidv4()}
              refContent={refContent}
              refTrigger={refTrigger}
              isOpen
              trigger={
                <div
                  ref={refTrigger}
                  className="absolute"
                  style={{
                    top: errorsList[viewIndex].top + 30,
                    left: errorsList[viewIndex].hintLeft,
                    width: getWidthOfStringInPx(fakeSpan, errorsList[viewIndex].errorTextWidthStr),
                  }}
                />
              }
            >
              <div className={clsx(styles.content)} ref={refContent}>
                {errorsList[viewIndex].mess}
              </div>
            </Dropdown>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Errors);
