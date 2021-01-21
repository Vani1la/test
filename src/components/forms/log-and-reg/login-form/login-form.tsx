import React from 'react';
import { Input } from '@components/inputs';
import { validateRequired, validateRequiredEmail } from '@utils/validate';
import styles from './login-form.module.scss';

type Props = {
  className?: string;
  controller: any;
};

const LoginForm: React.FC<Props> = ({ className, controller }) => {
  return (
    <div className={className}>
      <Input
        className={styles.logInput}
        label="Email"
        placeholder="Enter your email address..."
        controller={controller({ name: 'email', validate: validateRequiredEmail })}
      />
      <Input
        className={styles.logInput}
        label="Password"
        type="password"
        placeholder="Enter your email password..."
        controller={controller({ name: 'loginPassword', validate: validateRequired })}
      />
    </div>
  );
};

export default React.memo(LoginForm);
