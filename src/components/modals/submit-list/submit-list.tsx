import React from 'react';
import Modal from '@components/modal/modal';
import clsx from 'clsx';
import styles from './submit-list.module.scss';

type Props = {
  isOpen: boolean;
  close: () => void;
};

const submits = [
  {
    name: 'Сабмит 1',
    sender: 'Гость',
  },
  {
    name: 'Сабмит 2',
    sender: 'Гость',
  },
  {
    name: 'Сабмит 3',
    sender: 'Сергеев',
  },
];

const SubmitList: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      center
      title="Список сабмитов"
      classNameTitle={styles.title}
      classNameClose={styles.closer}
      classNameContent={styles.content}
    >
      <div className={styles.division} />
      <div className={styles.list}>
        {submits.map((submit) => (
          <div className={clsx(styles.submitItem, 'd-flex jc-b fsz-14')}>
            <span className={styles.submitName}>{submit.name}</span>
            <span className={styles.sender}>Отправитель: {submit.sender}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default React.memo(SubmitList);
