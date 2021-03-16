import React from 'react';
import clsx from 'clsx';
import styles from './shadow-wrapper.module.scss';

// aliases: оберткаТень

type PublicProps = {
  className?: string; // класс, класснейм, class
};

type Props = PublicProps & {};

const ShadowWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={clsx(className, styles.ShadowWrapper)}>{children}</div>;
};

export default React.memo(ShadowWrapper);
