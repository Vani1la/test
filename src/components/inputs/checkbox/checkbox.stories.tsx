import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import Checkbox from './checkbox';
import '@scss/form.scss';

const stories = storiesOf('inputs/checkbox', module).addParameters({
  layout: 'centered',
});

stories.add('default', () => {
  const { controller, $values } = useForm({ onSubmit: () => {} });
  const values = useStore($values);

  return (
    <div>
      <h6 className="mb-1">default</h6>
      <Checkbox controller={controller({ name: 'checkbox' })} label="Label" />

      <h6 className="mb-1 mt-2">reverse</h6>
      <Checkbox controller={controller({ name: 'checkbox' })} label="Label" reverse />

      <pre style={{ minWidth: '300px' }}>{JSON.stringify(values, null, '  ')}</pre>
    </div>
  );
});
