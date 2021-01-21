import React from 'react';
import icons from '@components/svg';
import clsx from 'clsx';
import styles from './attempt.module.scss';

type Props = {};

const Attempt: React.FC<Props> = () => {
  return (
    <section className={styles.Attempt}>
      <div className="container relative">
        <div className={clsx(styles.points, 'absolute')}>
          <icons.standalone.PointersTriangles />
        </div>
        <div className={clsx(styles.purpleVector, 'absolute')}>
          <icons.standalone.PurpleTriangle />
        </div>
        <div className={clsx(styles.whiteVector, 'absolute')}>
          <icons.standalone.WhitePost />
        </div>
        <div className={clsx(styles.stick, 'absolute')}>
          <icons.standalone.Stick />
        </div>
        <div className={clsx(styles.rightStick, 'absolute')}>
          <icons.standalone.Stick />
        </div>
        <div className={clsx(styles.title, 'fsz-24 text-bold')}>Попробуйте</div>
        <div className={clsx(styles.formBlock, 'relative')} />
        <div className={clsx(styles.separator, 'w-100')} />
        <footer className="d-flex jc-b">
          <div className={(styles.footerLeft, 'text-bold fsz-18')}>
            Form Creator
            <div className={clsx(styles.leftContent, 'text-medium fsz-14')}>
              Terms & Conditions
              <br />
              Privacy Policy
            </div>
          </div>
          <div className={clsx(styles.footerRight, 'text-medium fsz-14')}>
            © Copyright 2020.
            <br />
            All Rights Reserved
          </div>
        </footer>
      </div>
    </section>
  );
};

export default React.memo(Attempt);
