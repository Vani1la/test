import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import JsonScreen from './json-screen';
import styles from './json-screen.module.scss';

const stories = storiesOf('json-screen', module).addDecorator(centered);

stories.add('default', () => {
  const [fistName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const setNewValues = (e) => {
    if (e.target.name === 'First Name') setFirstName(e.target.value);
    if (e.target.name === 'Last Name') setLastName(e.target.value);
    if (e.target.name === 'Email') setEmail(e.target.value);
    if (e.target.name === 'Mobile number') setNumber(e.target.value);
  };

  return (
    <div className={`${styles.container} d-flex ai-c jc-a`}>
      <div className={styles.json}>
        <JsonScreen
          values={{
            'First name': fistName,
            'Last name': lastName,
            Email: email,
            'Mobile number': number,
          }}
        />
      </div>
      <form className={`${styles.form}`}>
        <input
          type="text"
          placeholder="First Name"
          name="First Name"
          onChange={setNewValues}
          className={styles.input}
        />
        <input type="text" placeholder="Last Name" name="Last Name" onChange={setNewValues} className={styles.input} />
        <input type="text" placeholder="Email" name="Email" onChange={setNewValues} className={styles.input} />
        <input
          type="text"
          placeholder="Mobile number"
          name="Mobile number"
          onChange={setNewValues}
          className={styles.input}
        />
      </form>
    </div>
  );
});
