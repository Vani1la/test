import React from 'react';
import Modal from '@components/modal';
import { useForm, FormValidate } from 'effector-react-form';
import Button from '@components/inputs/button';
import { LoginForm, RegisterForm } from '@components/forms';
import styles from './reg-and-login.module.scss';

type Props = {
  isOpen: boolean;
  close: () => void;
};

type ValuesLogin = {
  login: string;
  password: string;
};

type ValuesReg = {
  email: string;
  password: string;
  passwordRepeat: string;
};

export const formValidateReg: FormValidate<ValuesReg> = ({ values }) => {
  const errors = {} as any;
  if (values.password && values.passwordRepeat && values.password !== values.passwordRepeat) {
    errors.password = "Passwords don't match";
    errors.passwordRepeat = "Passwords don't match";
  }
  return errors;
};

const RegAndLogin: React.FC<Props> = ({ isOpen, close }) => {
  const [loginIsActive, setLoginIsActive] = React.useState(true);
  const { controller: logController, handleSubmit: logHandleSubmit } = useForm<ValuesLogin>();
  const { controller: regController, handleSubmit: regHandleSubmit } = useForm<ValuesReg>({
    validate: formValidateReg,
  });

  const setLogin = () => {
    if (!loginIsActive) {
      setLoginIsActive(true);
    }
  };

  const setRegister = () => {
    if (loginIsActive) {
      setLoginIsActive(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={close} center>
      <div className={`${styles.content} d-flex jc-c w-100 f-c`}>
        <div className={styles.title}>
          <span className={`${loginIsActive ? styles.active : ''} pointer`} onClick={setLogin}>
            Log In
          </span>
          &nbsp;/&nbsp;
          <span className={`${!loginIsActive ? styles.active : ''} pointer`} onClick={setRegister}>
            Register
          </span>
        </div>
        {loginIsActive ? (
          <div className="d-flex jc-c w-100 f-c" key={1}>
            <form onSubmit={logHandleSubmit} className={styles.form}>
              <LoginForm controller={logController} />
              <Button type="submit" className={`${styles.logBtn} w-100`} theme="primary">
                Log In
              </Button>
            </form>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={styles.forgot}>Forgot your password?</a>
          </div>
        ) : (
          <div className="d-flex jc-c w-100 f-c" key={2}>
            <form onSubmit={regHandleSubmit} className={styles.regForm}>
              <RegisterForm controller={regController} />
              <Button type="submit" className={`${styles.logBtn} w-100`} theme="primary">
                Register
              </Button>
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default React.memo(RegAndLogin);
