import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import { validateRequired } from '@utils/validate';
import { createStore } from 'effector';
import Textarea from './textarea';

const $outerErrorsInline = createStore<any>({ textarea: 'Some error' });

const stories = storiesOf('inputs/textarea', module).addParameters({
  layout: 'centered',
});

stories
  .add('default', () => {
    const { controller, handleSubmit } = useForm({ onSubmit: () => {} });

    return (
      <form onSubmit={handleSubmit} style={{ width: '500px' }}>
        <Textarea
          controller={controller({ name: 'textarea', validate: validateRequired })}
          label="Description"
          minRows={3}
          maxRows={5}
        />
      </form>
    );
  })
  .add('with error', () => {
    const { controller, handleSubmit } = useForm({ onSubmit: () => {}, $outerErrorsInline });

    return (
      <form onSubmit={handleSubmit} style={{ width: '500px' }}>
        <Textarea
          controller={controller({ name: 'textarea', validate: validateRequired })}
          label="Description"
          minRows={3}
          maxRows={5}
        />
      </form>
    );
  });
