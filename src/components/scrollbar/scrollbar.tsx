import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './scrollbar.module.scss';

type Props = {
  className?: string;
  style: object;
  children: any;
  onUpdate?: any;
};

const Scrollbar: React.FC<Props> = ({ style, children, className, onUpdate }) => {
  return (
    <Scrollbars
      style={style}
      renderThumbVertical={(props) => <div {...props} className={className || styles.vertical} />}
      renderThumbHorizontal={(props) => <div {...props} className={className || styles.vertical} />}
      onUpdate={onUpdate}
    >
      {children}
    </Scrollbars>
  );
};

export default React.memo(Scrollbar);
