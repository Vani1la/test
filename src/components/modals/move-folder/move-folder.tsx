import React from 'react';
import Modal from '@components/modal/modal';
import clsx from 'clsx';
import icons from '@components/svg';
import { Button } from '@components/inputs';
import styles from './move-folder.module.scss';

type Props = {
  isOpen: boolean;
  close: () => void;
};

const MoveFolder: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      center
      title="Перенести в папку"
      classNameTitle={styles.title}
      classNameClose={styles.closer}
      classNameContent={styles.content}
    >
      <div className={styles.division} />
      <div className="h-100 d-flex jc-b f-c">
        <div className={styles.folderList}>
          <div className={clsx(styles.folderBlock, 'd-flex ai-c pointer')}>
            <icons.sprite.Folder width={15} />
            <span className={clsx(styles.folderName, 'fsz-14')}>Мои формы</span>
          </div>
          <div className={clsx(styles.folderBlock, styles.folderDarkBlock, 'd-flex ai-c pointer')}>
            <icons.sprite.Folder width={15} />
            <span className={clsx(styles.folderName, 'fsz-14')}>Мои формы</span>
          </div>
          <span className={clsx(styles.newFolder, 'd-block fsz-14 pointer')}>+ Новая папка</span>
        </div>
        <div className={clsx(styles.btnBlock, 'd-flex jc-b')}>
          <Button theme="secondary" className={clsx(styles.btn, styles.btnLeft)}>
            Отмена
          </Button>
          <Button theme="primary" className={clsx(styles.btn, styles.btnRight)}>
            Перенести
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(MoveFolder);
