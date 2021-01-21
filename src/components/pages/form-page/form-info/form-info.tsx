import React from 'react';
import clsx from 'clsx';
import { Button } from '@components/inputs';
import useModal from '@hooks/use-modal';
import { modals } from '@constants/ctx';
import SubmitList from '@components/modals/submit-list/submit-list';
import styles from './form-info.module.scss';

type Props = {
  id: string;
};

const FormInfo: React.FC<Props> = ({ id }) => {
  const { close, isOpen, open } = useModal(modals.submitList);
  const copyUrl = () => {
    navigator.clipboard.writeText(`form-creator.com/forms/${id}`);
  };
  return (
    <div className={styles.FormInfo}>
      <h3 className={clsx(styles.mainTextColor, 'fsz-20 text-bold')}>Мои формы / Форма 1</h3>
      <div className={clsx(styles.division, styles.divisionTop)} />
      <div className={clsx(styles.urlBlock, 'd-flex jc-b ai-c')}>
        <span className={clsx(styles.mainText, 'fsz-14')}>{`form-creator.com/forms/${id}`}</span>
        <Button theme="secondary" onClick={copyUrl}>
          Скопировать ссылку
        </Button>
      </div>
      <div className={styles.division} />
      <div className={styles.managerBlock}>
        <Button className={styles.managerBtn} theme="primary">
          Редактировать
        </Button>
        <Button className={styles.managerBtn} theme="primary" onClick={open}>
          Сабмиты
        </Button>
      </div>
      <SubmitList isOpen={isOpen} close={close} />
    </div>
  );
};

export default React.memo(FormInfo);
