import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import useModal from '@hooks/use-modal';
import { modals } from '@constants/ctx';
import Button from '@components/inputs/button';
import RegAndLogin from './reg-and-login';

const stories = storiesOf('modals/reg-and-login', module).addDecorator(centered);

stories.add('default', () => {
  const { close, isOpen, open } = useModal(modals.regAndLogin);

  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <RegAndLogin isOpen={isOpen} close={close} />
    </>
  );
});
