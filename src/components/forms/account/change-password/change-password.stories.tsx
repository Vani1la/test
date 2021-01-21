import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import centered from '@storybook/addon-centered/react';
import ChangePassword from './change-password';

const stories = storiesOf('forms/change-password', module).addDecorator(centered);

stories.add('default', () => {
  const { controller } = useForm();
  return <ChangePassword controller={controller} />;
});
