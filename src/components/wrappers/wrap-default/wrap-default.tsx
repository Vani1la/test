import React from 'react';
// import styles from './shadow-wrapper.module.scss'

// aliases: дефолтОбертка

type PublicProps = {
  className?: string; // класс, класснейм, class
};

type Props = PublicProps & {};

const WrapDefault: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default React.memo(WrapDefault);
