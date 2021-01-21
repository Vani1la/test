import React from 'react';
import styles from './change-password.module.scss';
import { Input } from '@components/inputs';

type Props = {
  className?: string;
  controller: any;
};

const ChangePassword: React.FC<Props> = ({ className, controller }) => {
  return (
    <div className={className}>
      <Input className={styles.input} placeholder="Old password" controller={controller({ name: 'Old password' })} />
      <Input className={styles.input} placeholder="New password" controller={controller({ name: 'New password' })} />
      <Input
        className={styles.input}
        placeholder="Repeat password"
        controller={controller({ name: 'Repeat password' })}
      />
    </div>
  );
};

export default React.memo(ChangePassword);
