import React from 'react';
// @ts-ignore
import avatar from '@assets/account-page/avatar.png';
import clsx from 'clsx';
import { Button } from '@components/inputs';
import { useForm } from 'effector-react-form';
import ChangePassword from '@components/forms/account/change-password';
import BasicInformation from '@components/forms/account/basic-information';
import styles from './profile.module.scss';

type Props = {};

const Profile: React.FC<Props> = () => {
  const { controller, handleSubmit } = useForm();
  const { controller: controllerPass, handleSubmit: handleSubmitPass } = useForm();

  return (
    <div className={clsx(styles.Mquestionnaire, 'container')}>
      <div className={clsx(styles.content, 'w-100')}>
        <img className={styles.avatar} src={avatar} alt="" />
        <span className={clsx(styles.name, 'fsz-sm-24 fsz-16 text-bold')}>Иван Иванов</span>
        <div className={clsx(styles.partition, 'w-100')} />
        <form onSubmit={handleSubmit}>
          <BasicInformation
            className={clsx(styles.info, 'w-md-50 w-100 d-flex f-wrap jc-md-b jc-a')}
            controller={controller}
          />
        </form>
        <div className={clsx(styles.titlePass, 'fsz-20 d-flex ai-c')}>
          <span className={clsx(styles.textTitlePass, 'text-bold')}>Change password</span>
          <div className={clsx(styles.partition, styles.partitionPass, 'w-100')} />
        </div>
        <form onSubmit={handleSubmitPass} className={clsx(styles.passForm, 'd-flex f-wrap jc-md-b jc-c')}>
          <ChangePassword controller={controllerPass} className={clsx(styles.passForm, 'd-flex f-wrap jc-md-b jc-c')} />
          <Button type="submit" className={styles.btn} theme="primary">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Profile);
