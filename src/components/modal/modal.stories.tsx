import React from 'react';
import { storiesOf } from '@storybook/react';
import useModal from '@hooks/use-modal';
import { Button } from '@components/inputs';
import Modal from './modal';

const stories = storiesOf('modal', module).addParameters({
  layout: 'centered',
});

stories
  .add('default', () => {
    const MODAL_TEST = 'MODAL_TEST';
    const { isOpen, close, open } = useModal(MODAL_TEST);

    return (
      <div>
        <Modal isOpen={isOpen} onClose={close} center>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, tempore?
        </Modal>
        <Button onClick={open}>Open modal</Button>
      </div>
    );
  })
  .add('with title', () => {
    const MODAL_TEST_TITLE = 'MODAL_TEST_TITLE';
    const { isOpen, close, open } = useModal(MODAL_TEST_TITLE);

    return (
      <div>
        <Modal isOpen={isOpen} onClose={close} center title="Some title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, tempore?
        </Modal>
        <Button onClick={open}>Open modal</Button>
      </div>
    );
  });
