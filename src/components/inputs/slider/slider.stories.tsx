import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import Slider from './slider';

const stories = storiesOf('inputs/slider', module).addParameters({
  layout: 'centered',
});

stories.add('default', () => {
  const { controller, $values } = useForm({ onSubmit: () => {} });
  const values = useStore($values);

  return (
    <div style={{ width: '514px' }}>
      <Slider controller={controller({ name: 'slider' })} />
      <pre>{JSON.stringify(values, null, '  ')}</pre>
    </div>
  );
});
