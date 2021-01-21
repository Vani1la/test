import React from 'react';
import { useError, UseErrorParams } from 'effector-react-form';
import cx from 'clsx';

type Props = {
  name: string;
} & UseErrorParams;

const Error: React.FC<Props> = ({ ...rest }) => {
  const { isShowError, error } = useError({ ...rest });

  if (isShowError) {
    return <div className={cx('error', 'fsz-14')}>{error}</div>;
  }

  return null;
};

export default React.memo(Error);
