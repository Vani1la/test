import React from 'react';
import icons from '@components/svg';
import clsx from 'clsx';
import { Button } from '@components/inputs';
import styles from './folders.module.scss';

type Props = {};

const Folders: React.FC<Props> = () => {
  return (
    <div className={styles.Folders}>
      <div className={styles.folders}>
        <div className={clsx(styles.folder, 'd-flex fsz-14')}>
          <div className={styles.folderIcon}>
            <icons.sprite.Folder width="15" height="12" />
          </div>
          &nbsp; Мои формы &nbsp;
          <div className={styles.mobileArrow}>
            <icons.sprite.ArrowTriangleDown width={7} />
          </div>
          <Button theme="primary" className={styles.newFolderBtnMobile}>
            +
          </Button>
        </div>
        <Button theme="primary" className={styles.newFolderBtn}>
          + Новая папка
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Folders);
