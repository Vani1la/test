import React from 'react';
import clsx from 'clsx';
import { useStore } from 'effector-react';
import { $editorTheme } from '@store/editor/editor';
import icons from '@components/svg';
import ThemeHandler from '@components/code-editor/theme-handler/theme-handler';
import ChoosingStyle from '@components/modals/choosing-style/choosing-style';
import useModal from '@hooks/use-modal';
import { modals } from '@constants/ctx';
import styles from './edit-container.module.scss';

type Props = {
  children: any;
};

const EditContainer: React.FC<Props> = ({ children }) => {
  const whiteTheme = useStore($editorTheme);
  const { close, isOpen, open } = useModal(modals.choosingStyle);
  return (
    <div className={clsx(styles.EditContainer, whiteTheme ? styles.whiteEditContainer : null)}>
      <div className="container">
        <div className={clsx(styles.editHeader, 'd-flex ai-c')}>
          <div className={styles.backBlock}>
            <icons.sprite.ArrowLeftFull
              className={clsx(styles.arrow, whiteTheme ? styles.whiteTheme : null)}
              width={24}
            />
            <span className={clsx(styles.mainText, whiteTheme ? styles.whiteTheme : null, 'fsz-20')}>Назад</span>
          </div>
          <div
            className={clsx(
              styles.patch,
              styles.mainText,
              whiteTheme ? styles.whiteThemeStyle : null,
              'fsz-18 text-semibold',
            )}
          >
            <span className={clsx(styles.patchFolder, 'text-medium')}>Мои формы /</span> Form 1
          </div>
          <div className={styles.styleBlock} onClick={open}>
            <icons.sprite.Layout className={styles.styleSvg} width={28} />
            <span
              className={clsx(styles.styleText, styles.mainText, whiteTheme ? styles.whiteThemeStyle : null, 'fsz-14')}
            >
              Стиль формы (Material UI)
            </span>
          </div>
          <ThemeHandler className={styles.handler} />
        </div>
        {children}
      </div>
      <ChoosingStyle isOpen={isOpen} close={close} />
    </div>
  );
};

export default React.memo(EditContainer);
