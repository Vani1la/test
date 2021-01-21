import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import useDropdown from '@hooks/use-dropdown';
import { Button } from '@components/inputs';
import Dropdown from './dropdown';

const stories = storiesOf('dropdown', module).addDecorator(centered);

stories.add('default', () => {
  const { isOpen, toggle, refContent, refTrigger } = useDropdown('GLOBAL_DROPDOWN_ID');
  return (
    <Dropdown
      refContent={refContent}
      refTrigger={refTrigger}
      isOpen={isOpen}
      trigger={
        <div ref={refTrigger}>
          <Button onClick={() => toggle()}>Dropdown</Button>
        </div>
      }
    >
      <ul style={{ boxShadow: '0 0 8px #777', padding: '10px', borderRadius: '4px', margin: '0', width: '200px' }}>
        <li>Content 1</li>
        <li>Content 2</li>
        <li>Content 3</li>
        <li>Content 4</li>
        <li>Content 5</li>
      </ul>
    </Dropdown>
  );
});
