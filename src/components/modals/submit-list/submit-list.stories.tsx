import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import useModal from '@hooks/use-modal';
import { modals } from '@constants/ctx';
import Button from '@components/inputs/button';
import SubmitList from './submit-list';

const stories = storiesOf('modals/submit-list', module).addDecorator(centered);

stories.add('default', () => {
  const { close, isOpen, open } = useModal(modals.submitList);
  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <SubmitList isOpen={isOpen} close={close} />
    </>
  );
});
