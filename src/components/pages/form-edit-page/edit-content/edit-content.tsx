import React from 'react';
import Editor from '@components/code-editor/editor/editor';
import FormPreview from '@components/form-preview';
import { useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import clsx from 'clsx';
import styles from './edit-content.module.scss';

type Props = {};

const EditContent: React.FC<Props> = () => {
  const { controller, $values } = useForm();
  const { config } = useStore($values);
  return (
    <div className={clsx(styles.EditContent, 'd-flex')}>
      <div className={styles.editorBlock}>
        <Editor
          id="editor"
          className={styles.editor}
          width="472px"
          height="calc(100vh - 109px)"
          controller={controller({ name: 'config' })}
        />
      </div>
      <div className={styles.previewBlock}>
        <FormPreview config={config} />
      </div>
    </div>
  );
};

export default React.memo(EditContent);
