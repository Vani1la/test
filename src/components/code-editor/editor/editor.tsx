import React, { useEffect, useRef } from 'react';
import { useStore } from 'effector-react';
import clsx from 'clsx';
import useClickOutside from '@hooks/use-click-outside';
import Select from '@components/code-editor/select';
import Caret from '@components/code-editor/caret';
import Errors from '@components/code-editor/errors';
import { Controller, useForm } from 'effector-react-form';
import Textarea from '@components/code-editor/fake-textarea';
import { setCaretPosition } from '@utils/js/textarea';
import formattingText from '@utils/formatting-text';
import IntellisenseDropdown from '@components/code-editor/intellisense-dropdown';
import Scrollbar from '@components/scrollbar';
import { PADDING_Y, ROW_HEIGHT, TEXT_WIDTH_INDENT } from '@constants/indents';
import { findLineByIndex } from '@utils/text-parser';
import {
  setIsFocused,
  $codeLines,
  $focused,
  $textarea,
  $textLines,
  $config,
  setHTMLTextareaElement,
  keyEvent,
  downClick,
  $editorComponentLines,
  endSortComponents,
  $editorTheme,
  setMaxLengthLine,
  $maxLengthLine,
  $caretTextareaPosition,
  $extensiveLineCounter,
} from '@store/editor/editor';
import { textLimitInfo, getIndexSymbolOfPx } from '@utils/js/string';
import { setCursorPosition, $cursorPosition } from '@store/editor/cursor';
import { $selectMouse, selectTextEvent, selectEvent, setSelectedInBack, $selectedInBack } from '@store/editor/select';
import ComponentLines from '@components/code-editor/component-lines';
import { SortableList } from '@components/sortable';
import Row from '@components/code-editor/row';
import styles from './editor.module.scss';
import './editor.scss';

type Props = {
  className?: string;
  controller: Controller;
  id: string;
  height: string | number;
  width: string | number;
};

const Editor: React.FC<Props> = ({ className, controller, id, height, width }) => {
  const refCode = useRef<HTMLDivElement>();
  const refEditor = useRef<HTMLDivElement>();
  const refFakeSpan = useRef<HTMLSpanElement>();
  const editorLines = useStore($codeLines);
  const preRef = useRef();
  const refTextarea = useRef<HTMLTextAreaElement>();
  const setRefTextarea = (textarea: HTMLTextAreaElement) => {
    refTextarea.current = textarea;
    setHTMLTextareaElement(textarea);
  };

  const {
    input: { onChange },
  } = controller();

  useEffect(() => {
    onChange($config.getState());
  }, [editorLines]);

  const { controller: innerController } = useForm({ $values: $textarea });
  const textLines = useStore($textLines);
  const maxLengthLine = useStore($maxLengthLine);
  const extensiveLineCounter = useStore($extensiveLineCounter);

  useEffect(() => {
    const kewDownHandler = (e) => {
      setMaxLengthLine(refFakeSpan.current);
      const ctrlS = e.key === 's' && e.ctrlKey;
      const isClickUnderText = e.offsetY > textLines.length * ROW_HEIGHT + PADDING_Y;
      const cursorPosition = $cursorPosition.getState();
      const caretPosition = $caretTextareaPosition.getState();
      const isMouseDown = e.type === 'mousedown';
      const isMouseUp = e.type === 'mouseup';
      const selectArrow =
        (e.key === 'ArrowLeft' && e.shiftKey) ||
        (e.key === 'ArrowUp' && e.shiftKey) ||
        (e.key === 'ArrowRight' && e.shiftKey) ||
        (e.key === 'ArrowDown' && e.shiftKey);
      if (ctrlS) {
        e.preventDefault();
        formattingText(refTextarea.current);
      }
      if (!isMouseUp && !isMouseDown && e.key !== 'Shift' && e.key !== 'Control' && !selectArrow) {
        setSelectedInBack(false);
      }
      if (isMouseDown && cursorPosition.x > 60 && e.shiftKey) {
        const start = $selectedInBack.getState() ? caretPosition.end : caretPosition.start;
        selectTextEvent({
          selected: true,
          start,
          textarea: refTextarea.current,
          fakeSpan: refFakeSpan.current,
          event: e,
        });
        selectEvent({ selected: true, start, fakeSpan: refFakeSpan.current });
      } else if (isMouseDown && cursorPosition.x > 60) {
        selectTextEvent({
          selected: true,
          start: getIndexSymbolOfPx(
            $textLines.getState(),
            refFakeSpan.current,
            cursorPosition,
            $extensiveLineCounter.getState(),
          ),
          textarea: refTextarea.current,
          fakeSpan: refFakeSpan.current,
          event: e,
        });
        if (caretPosition.start !== caretPosition.end) {
          selectEvent({ selected: false, fakeSpan: refFakeSpan.current });
        }
      }
      if (isMouseUp) {
        if (caretPosition.start !== caretPosition.end) {
          setTimeout(selectTextEvent, 0, { selected: false, event: e });
        } else {
          selectTextEvent({ selected: false, fakeSpan: refFakeSpan.current, event: e });
        }
      }
      if (isClickUnderText && isMouseDown) {
        downClick(refFakeSpan.current);
        const textLength = $textarea.getState().text.length;
        setCaretPosition(refTextarea.current, { start: textLength, end: textLength });
      } else {
        setTimeout(keyEvent, 0, { ...e, fakeSpan: refFakeSpan.current });
      }
    };

    const mouseMove = (e: MouseEvent) => {
      if (refEditor.current) {
        const rect = refEditor.current.getBoundingClientRect();
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y + refEditor.current.scrollTop;
        if (x < 0 || x > rect.width || y < 0 || y > rect.height + refEditor.current.scrollTop) {
          setCursorPosition({ x: -1, y: -1 });
        } else {
          setCursorPosition({ x, y });
        }
      }
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mousedown', kewDownHandler);
    document.addEventListener('mouseup', kewDownHandler);
    document.addEventListener('keydown', kewDownHandler);
    document.addEventListener('keydown', keyEvent);
    document.addEventListener('keyup', keyEvent);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mousedown', kewDownHandler);
      document.removeEventListener('mouseup', kewDownHandler);
      document.removeEventListener('keydown', kewDownHandler);
      document.removeEventListener('keydown', keyEvent);
      document.removeEventListener('keyup', keyEvent);
    };
  }, []);

  const createRowClickHandler = (i) => (event: MouseEvent): void => {
    if (refCode.current && !$selectMouse.getState().selected) {
      const rectEditor = refCode.current.getBoundingClientRect();
      const paddingLeftCSS = window.getComputedStyle(refCode.current, null).getPropertyValue('padding-left');
      const match = paddingLeftCSS.match(/\d+/);
      const paddingLeft = Number.parseInt(match && match[0], 10) || 0;
      const mouseLocalPosition = event.clientX - rectEditor.left - paddingLeft;
      const textLimitInfoResult = textLimitInfo(refFakeSpan.current, textLines[i], mouseLocalPosition);
      const prevLineTextLength = textLines.slice(0, i + 1).join('\n').length - textLines[i].length;

      if (textLimitInfoResult) {
        const { i: currentLineIndex, charWidth, charLocalPos } = textLimitInfoResult;
        const roundValue = Math.round(charLocalPos / charWidth);
        const pos = prevLineTextLength + currentLineIndex + roundValue;
        setCaretPosition(refTextarea.current, { start: pos, end: pos });
      } else {
        const pos = textLines[i].length + prevLineTextLength;
        setCaretPosition(refTextarea.current, { start: pos, end: pos });
      }
    }
  };

  // caret {
  const isFocused = useStore($focused);
  const clickOutside = () => {
    setIsFocused(false);
  };
  useClickOutside(refCode, clickOutside);

  const onClick = () => {
    setIsFocused(true);
    refTextarea.current.focus();
  };
  // caret }
  const onDoubleClick = () => {
    const clickIndex = $caretTextareaPosition.getState().end;
    const resline = findLineByIndex($textarea.getState().text, clickIndex);
    const higWord = resline.line.split(' ')[resline.line.split(' ').length - 1];
    const word = $textLines.getState()[resline.index].split(' ')[resline.line.split(' ').length - 1];
    const start = clickIndex - higWord.length;
    const end = clickIndex + (word.length - higWord.length);
    setCaretPosition(refTextarea.current, { start, end });
  };

  const whiteTheme = useStore($editorTheme);
  const components = useStore($editorComponentLines);

  return (
    <Scrollbar style={{ width, height }}>
      <div
        style={{ width: maxLengthLine + TEXT_WIDTH_INDENT, minWidth: width, minHeight: height }}
        ref={refEditor}
        className={clsx('d-flex pl-6', styles.wrap, className, 'editor')}
        id={id}
      >
        <div
          className={clsx('editor__lineCounter', styles.lineCounter)}
          style={{ width: extensiveLineCounter ? '3em' : 'auto' }}
        >
          {editorLines.map(({ key }, index) => (
            <span key={key} className={styles.rowLineCounter} style={{ right: '10px', top: `${index * 20 + 10}px` }}>
              {index + 1}
            </span>
          ))}
        </div>
        <div
          ref={refCode}
          className={clsx(styles.code, 'editor__code', { focused: isFocused })}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
        >
          <pre style={{ overflow: 'visible' }} ref={preRef}>
            <span id="fakeSpan" className={styles.fakeSpan} ref={refFakeSpan} />
            <Textarea dev={false} setRefTextarea={setRefTextarea} controller={innerController({ name: 'text' })} />
            <Errors textarea={refTextarea.current} fakeSpan={refFakeSpan.current} />
            <Select />
            <IntellisenseDropdown />
            <SortableList
              getContainer={() => document.getElementById(id)}
              helperClass={clsx(whiteTheme ? styles.brightHelper : styles.darkHelper)}
              useDragHandle
              lockAxis="y"
              onSortEnd={endSortComponents}
            >
              {components.map((component) => (
                <ComponentLines index={component.index} row={component.rows[0]}>
                  {component.rows.map((row) => (
                    <Row html={row.html} onClick={createRowClickHandler(row.index) as any} />
                  ))}
                </ComponentLines>
              ))}
            </SortableList>
            {isFocused && <Caret />}
          </pre>
        </div>
      </div>
    </Scrollbar>
  );
};

export default React.memo(Editor);
