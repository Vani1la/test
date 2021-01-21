import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import useModal from '@hooks/use-modal';
import { modals } from '@constants/ctx';
import Button from '@components/inputs/button';
import ChoosingStyle from './choosing-style';

const stories = storiesOf('modals/choosing-style', module).addDecorator(centered);

stories.add('default', () => {
  const { close, isOpen, open } = useModal(modals.choosingStyle);
  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <ChoosingStyle isOpen={isOpen} close={close} />
    </>
  );
});
