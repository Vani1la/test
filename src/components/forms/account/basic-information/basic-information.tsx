import React from 'react';
import { Input } from '@components/inputs';
import styles from './basic-information.module.scss';

type Props = {
  className?: string;
  controller: any;
};

const BasicInformation: React.FC<Props> = ({ className, controller }) => {
  return (
    <div className={className}>
      <Input className={styles.input} placeholder="First Name" controller={controller({ name: 'First name' })} />
      <Input className={styles.input} placeholder="Last Name" controller={controller({ name: 'Last Name' })} />
      <Input className={styles.input} placeholder="Email" controller={controller({ name: 'Email' })} />
    </div>
  );
};

export default React.memo(BasicInformation);
