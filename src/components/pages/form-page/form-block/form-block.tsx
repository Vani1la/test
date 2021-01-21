import React from 'react';
import { Input } from '@components/inputs';
import { useForm } from 'effector-react-form';
import icons from '@components/svg';
import clsx from 'clsx';
import styles from './form-block.module.scss';

type Props = {};

const FormBlock: React.FC<Props> = () => {
  const { controller } = useForm();
  return (
    <div className={styles.FormBlock}>
      <icons.standalone.PointersOne className={clsx(styles.pointsTop, 'absolute')} />
      <icons.standalone.FormBotPoints className={clsx(styles.pointsBot, 'absolute')} />
      <div className={clsx(styles.content, 'relative')}>
        <Input className={styles.input} placeholder="First Name" controller={controller({ name: 'First name' })} />
        <Input className={styles.input} placeholder="Last Name" controller={controller({ name: 'Last Name' })} />
        <Input className={styles.input} placeholder="Email" controller={controller({ name: 'Email' })} />
        <Input className={styles.input} placeholder="Mobile number" controller={controller({ name: 'Number' })} />
      </div>
    </div>
  );
};

export default React.memo(FormBlock);
