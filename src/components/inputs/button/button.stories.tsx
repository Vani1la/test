import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import styles from './button.stories.module.scss';
import Button from './button';

const stories = storiesOf('button', module).addDecorator(centered);

stories.add('default', () => (
  <div className={`${styles.container} d-flex`}>
    <div className={`${styles.theme} d-flex f-c ai-b`}>
      <div>Primary</div>
      <div>Secondary</div>
    </div>
    <div className={styles.content}>
      <div className={`${styles.condition} d-flex jc-a`}>
        <span>Default</span>
        <span>Disabled</span>
      </div>
      <div className={`${styles.primary} d-flex jc-a`}>
        <Button theme="primary">Add to cart</Button>
        <Button theme="primary" disabled={true}>
          Add to cart
        </Button>
      </div>
      <div className={`${styles.secondary} d-flex jc-a`}>
        <Button theme="secondary">Add to cart</Button>
        <Button theme="secondary" disabled={true}>
          Add to cart
        </Button>
      </div>
    </div>
  </div>
));
