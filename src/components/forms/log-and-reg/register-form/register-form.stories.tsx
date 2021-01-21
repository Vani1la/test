import React from 'react';
import { storiesOf } from '@storybook/react';
import { useForm } from 'effector-react-form';
import centered from '@storybook/addon-centered/react';
import RegisterForm from './register-form';

const stories = storiesOf('forms/register-form', module).addDecorator(centered);

const formValidateReg = ({ values }) => {
  const errors = {} as any;
  if (values.password && values.passwordRepeat && values.password !== values.passwordRepeat) {
    errors.password = "Passwords don't match";
    errors.passwordRepeat = "Passwords don't match";
  }
  return errors;
};

stories.add('default', () => {
  const { controller } = useForm({
    validate: formValidateReg,
  });
  return (
    <form>
      <RegisterForm controller={controller} />
    </form>
  );
});
