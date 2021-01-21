import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import DropzoneRectangle from './dropzone-rectangle';
import '@scss/form.scss';

const stories = storiesOf('inputs/dropzone-rectangle', module).addParameters({
  layout: 'centered',
});

stories.add('default', () => {
  const { controller } = useForm({ onSubmit: () => {} });

  return <DropzoneRectangle controller={controller({ name: 'image' })} type="brands" />;
});
