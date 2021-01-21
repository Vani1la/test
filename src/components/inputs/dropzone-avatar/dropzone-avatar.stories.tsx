import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import DropzoneAvatar from './dropzone-avatar';
import '@scss/form.scss';

const stories = storiesOf('inputs/dropzone-avatar', module).addParameters({
  layout: 'centered',
});

stories.add('default', () => {
  const { controller } = useForm({ onSubmit: () => {} });

  return <DropzoneAvatar controller={controller({ name: 'image' })} />;
});
