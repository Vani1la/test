import React from 'react';
import styles from './register-form.module.scss';
import { Input } from '@components/inputs';
import { validateRequired, validateRequiredEmail } from '@utils/validate';

type Props = {
  className?: string;
  controller: any;
};

const RegisterForm: React.FC<Props> = ({ className, controller }) => {
  return (
    <div className={className}>
      <Input
        className={styles.regInput}
        placeholder="Email"
        controller={controller({ name: 'email', validate: validateRequiredEmail })}
      />
      <Input
        className={styles.regInput}
        placeholder="Password"
        type="password"
        controller={controller({ name: 'password', validate: validateRequired })}
      />
      <Input
        className={styles.regInput}
        placeholder="Repeat password"
        type="password"
        controller={controller({ name: 'passwordRepeat', validate: validateRequired })}
      />
    </div>
  );
};

export default React.memo(RegisterForm);
