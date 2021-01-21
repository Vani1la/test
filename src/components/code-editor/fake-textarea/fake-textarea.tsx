import React, { useCallback, useRef } from 'react';
import { Controller } from 'effector-react-form';
import clsx from 'clsx';
import styles from './fake-textarea.module.scss';

type Props = {
  controller: Controller;
  className?: string;
  dev?: boolean;
  setRefTextarea?: any;
};

const FakeTextarea = ({ controller, dev, setRefTextarea }: Props) => {
  const { input } = controller();
  const refTextarea = useRef<HTMLTextAreaElement>();

  const setRef = useCallback((textarea) => {
    setRefTextarea(textarea);
    refTextarea.current = textarea;
  }, []);

  return (
    <div className={clsx(styles.wrap, { [styles.wrap_dev]: dev })}>
      <textarea {...input} value={input.value || ''} className={clsx(styles.FakeTextarea)} ref={setRef} />
    </div>
  );
};

export default React.memo(FakeTextarea);
