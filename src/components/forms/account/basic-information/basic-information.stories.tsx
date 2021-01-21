import React from 'react';
import { useForm } from 'effector-react-form';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import BasicInformation from './basic-information';

const stories = storiesOf('forms/basic-information', module).addDecorator(centered);

stories.add('default', () => {
  const { controller } = useForm();
  return <BasicInformation controller={controller} />;
});
