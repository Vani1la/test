import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import { createStore } from 'effector';
import InputCounter from './input-counter';
import '@scss/form.scss';

const stories = storiesOf('inputs/input-counter', module).addParameters({
  layout: 'centered',
});

const $values = createStore<{ count: any }>({
  count: 1,
});

stories.add('default', () => {
  const { controller } = useForm({
    $values,
  });

  return (
    <div>
      <InputCounter controller={controller({ name: 'count' })} />
    </div>
  );
});
