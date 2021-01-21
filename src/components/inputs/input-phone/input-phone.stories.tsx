import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import { Input } from '@components/inputs';
import { createStore } from 'effector';
import InputPhone from './input-phone';

const $values = createStore({ name: 'test' });
const $valuesWithErrors = createStore({ name: 'test', phone: '79990009922' });
const $outerErrorsInline = createStore<any>({ phone: 'Field is required', name: 'Field is required' });

const stories = storiesOf('inputs/input-phone', module).addParameters({
  layout: 'centered',
});

stories
  .add('default', () => {
    const { controller } = useForm({ $values });
    const values = useStore($values);

    return (
      <div>
        <Input controller={controller({ name: 'name' })} label="Name" />
        <br />
        <InputPhone controller={controller({ name: 'phone' })} />
        <pre>{JSON.stringify(values, null, '  ')}</pre>
      </div>
    );
  })
  .add('sizes', () => {
    const { controller } = useForm({ $values });
    const values = useStore($values);

    return (
      <div>
        <h3>sm</h3>
        <br />
        <br />
        <div>
          <Input size="sm" controller={controller({ name: 'name' })} label="Name" />
          <br />
          <InputPhone size="sm" controller={controller({ name: 'phone' })} />
          <pre>{JSON.stringify(values, null, '  ')}</pre>
        </div>
        <br />
        <h3>md (default)</h3>
        <br />
        <br />
        <div>
          <Input size="md" controller={controller({ name: 'name' })} label="Name" />
          <br />
          <InputPhone size="md" controller={controller({ name: 'phone' })} />
          <pre>{JSON.stringify(values, null, '  ')}</pre>
        </div>
      </div>
    );
  })
  .add('with error', () => {
    const { controller } = useForm({ $values: $valuesWithErrors, $outerErrorsInline });
    const values = useStore($values);

    return (
      <div>
        <Input controller={controller({ name: 'name' })} label="Name" />
        <br />
        <InputPhone controller={controller({ name: 'phone' })} />
        <pre>{JSON.stringify(values, null, '  ')}</pre>
      </div>
    );
  });
