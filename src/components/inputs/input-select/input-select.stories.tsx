import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '@components/inputs/input';
import { useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import { validateRequired } from '@utils/validate';
import InputSelect from './input-select';

const stories = storiesOf('inputs/input-select', module).addParameters({
  layout: 'centered',
});

const options = [
  { label: 'Test', value: 1 },
  { label: 'Test test test test', value: 2 },
  { label: 'Test test test test test', value: 3 },
  { label: 'Test', value: 4 },
  { label: 'Test', value: 5 },
  { label: 'Test', value: 6 },
];

stories
  .add('default', () => {
    const { controller, $values } = useForm();
    const values = useStore($values);

    return (
      <div style={{ width: '500px' }}>
        <Input controller={controller({ name: 'test' })} />
        <br />
        <InputSelect controller={controller({ name: 'select1', validate: validateRequired })} options={options} />
        <br />
        <InputSelect
          controller={controller({ name: 'select2', validate: validateRequired })}
          isMulti
          options={options}
        />

        <br />
        <pre>{JSON.stringify(values, null, '  ')}</pre>
      </div>
    );
  })
  .add('sizes', () => {
    const { controller, $values } = useForm();
    const values = useStore($values);

    return (
      <div style={{ width: '500px' }}>
        <h2>sm</h2>
        <Input size="sm" controller={controller({ name: 'test' })} />
        <br />
        <InputSelect
          size="sm"
          controller={controller({ name: 'select1', validate: validateRequired })}
          options={options}
        />
        <br />
        <InputSelect
          controller={controller({ name: 'select2', validate: validateRequired })}
          isMulti
          size="sm"
          options={options}
        />

        <br />
        <pre>{JSON.stringify(values, null, '  ')}</pre>

        <hr className="mt-2" />

        <h2>md</h2>
        <Input controller={controller({ name: 'test' })} />
        <br />
        <InputSelect controller={controller({ name: 'select1', validate: validateRequired })} options={options} />
        <br />
        <InputSelect
          controller={controller({ name: 'select2', validate: validateRequired })}
          isMulti
          options={options}
        />

        <br />
        <pre>{JSON.stringify(values, null, '  ')}</pre>
      </div>
    );
  });
