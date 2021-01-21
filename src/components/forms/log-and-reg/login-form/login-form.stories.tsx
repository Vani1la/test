import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { useForm } from 'effector-react-form';
import LoginForm from './login-form';

const stories = storiesOf('forms/login-form', module).addDecorator(centered);

stories.add('default', () => {
  const { controller } = useForm();
  return <LoginForm controller={controller} />;
});
