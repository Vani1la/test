/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useCallback } from 'react';
import { Controller } from 'effector-react-form';
import TextareaAutosize from 'react-textarea-autosize';
import cx from 'clsx';
// import styles from './textarea.module.scss';

// aliases: текстоваяОбласть

type PublicProps = {
  className?: string; // class, класснейм, класс
  label?: string; // лейбл
  minRows?: number; // минСтрока
  maxRows?: number; // максСтрока
};

type Props = PublicProps & {
  controller: Controller;
};

const Textarea: React.FC<Props> = ({ controller, className, label, minRows = 1, maxRows }) => {
  const {
    input,
    isShowError,
    error,
    fieldState: { active },
  } = controller();

  const refTextarea = useRef<HTMLTextAreaElement>();

  const setFocus = useCallback(() => {
    if (refTextarea.current) {
      refTextarea.current.focus();
    }
  }, []);

  return (
    <div className={cx('textarea__wrap', className)}>
      <div
        className={cx('wrapTextarea', {
          ['focus']: active,
          ['active']: active || input.value,
          ['error']: isShowError,
        })}
      >
        {label && (
          <span onClick={setFocus} className="label">
            {label}
          </span>
        )}

        <TextareaAutosize
          {...input}
          value={input.value || ''}
          ref={refTextarea as any}
          minRows={minRows}
          maxRows={maxRows}
          className="textarea"
        />
        <fieldset aria-hidden className="textarea__fieldset">
          <legend className="legendElement">
            {label && <span className="textarea__legendInnerElement">{label}</span>}
          </legend>
        </fieldset>
      </div>

      {isShowError && <div className="errorMessage">{error}</div>}
    </div>
  );
};

export default React.memo(Textarea);
