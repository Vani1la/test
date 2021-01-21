import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { useForm } from 'effector-react-form';
import ThemeHandler from '@components/code-editor/theme-handler';
import Editor from './editor';

const stories = storiesOf('editor', module).addDecorator(centered);

stories.add('default', () => {
  const { controller } = useForm();

  return (
    <div>
      <div className="w-100 d-flex ai-c jc-c" style={{ background: '#ccc', height: '30px' }}>
        <ThemeHandler className="" defaultTheme="dark" />
      </div>
      <Editor id="code" width={400} height="20em" controller={controller({ name: 'editor' })} />
    </div>
  );
});
