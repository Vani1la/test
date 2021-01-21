import React from 'react';
import clsx from 'clsx';
import { useStore } from 'effector-react';
import { setTheme, $editorTheme, themeHandler } from '@store/editor/editor';
import styles from './theme-handler.module.scss';

type Props = {
  className?: string;
  defaultTheme?: string;
};

const ThemeHandler: React.FC<Props> = ({ className, defaultTheme }) => {
  const whiteTheme = useStore($editorTheme);
  React.useEffect(() => {
    document.body.classList.add('theme-dark');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    defaultTheme === 'white' ? setTheme(true) : setTheme(false);
  }, []);
  const onClick = () => {
    document.body.classList.remove(whiteTheme ? 'theme-bright' : 'theme-dark');
    document.body.classList.add(whiteTheme ? 'theme-dark' : 'theme-bright');
    themeHandler();
  };

  return (
    <div className={clsx(styles.ThemeHandler, className, 'd-flex ai-c')}>
      <div
        onClick={onClick}
        className={clsx(styles.handlerState, whiteTheme ? styles.whiteHandler : styles.blackHandler)}
      >
        <div className={clsx(styles.circle, { [styles.darkCircle]: !whiteTheme })} />
      </div>
      <span className={clsx(styles.text, whiteTheme ? styles.blackText : styles.whiteText, 'fsz-14')}>Темная тема</span>
    </div>
  );
};

export default React.memo(ThemeHandler);
