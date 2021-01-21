import React from 'react';
import cx from 'clsx';
import styles from './button.module.scss';

export type Size = 'sm' | 'lg';

export type Theme = 'transparent' | 'primary' | 'secondary';

// aliases: кнопка

type PublicProps = {
  type?: 'button' | 'submit'; // тип
  className?: string; // класс, класснейм, class
  theme?: 'transparent' | 'primary' | 'secondary'; // тема
  size?: 'sm' | 'lg'; // размер
  style?: any; // стиль
  disabled?: boolean; // отключена
};

type Props = PublicProps & {
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = React.memo(
  ({ children, type = 'button', className, theme = 'primary', size, onClick, style, disabled }) => {
    return (
      <button
        className={cx(className, styles.button, styles[`button_${theme}`], { [styles[`size_${size}`]]: size })}
        type={type}
        onClick={onClick}
        style={style}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);

export default Button;
