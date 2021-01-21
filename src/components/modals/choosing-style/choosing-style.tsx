import React from 'react';
import Modal from '@components/modal/modal';
import clsx from 'clsx';
import icons from '@components/svg';
import { Button } from '@components/inputs';
import styles from './choosing-style.module.scss';

type Props = {
  isOpen: boolean;
  close: () => void;
};

const stylesList = [{ name: 'Material UI' }, { name: 'Ant d' }, { name: 'Bootstrap' }];

const ChoosingStyle: React.FC<Props> = ({ isOpen, close }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      center
      title="Выбор стиля"
      classNameTitle={styles.title}
      classNameClose={styles.closer}
      classNameContent={styles.content}
    >
      <div className={styles.division} />
      <div className="h-100 d-flex jc-b f-c">
        <div className={styles.styleList}>
          {stylesList.map((styleItem, index) => {
            if (activeIndex === index) {
              return (
                <div className={clsx(styles.styleBlock, 'relative d-flex jc-b ai-c')}>
                  <div className={clsx(styles.activeSelect, 'absolute h-100')} />
                  <div className={clsx(styles.activeItem, 'd-flex ai-c')}>
                    <icons.sprite.Layout width={23} />
                    <span className={clsx(styles.activeName, styles.styleName)}>{styleItem.name}</span>
                  </div>
                  <icons.sprite.Eye width={20} className={styles.eye} />
                </div>
              );
            }
            return (
              <div
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={clsx(styles.styleBlock, 'd-flex jc-b ai-c pointer')}
              >
                <div className={clsx(styles.styleItem, 'd-flex ai-c')}>
                  <icons.sprite.Layout width={23} />
                  <span className={styles.styleName}>{styleItem.name}</span>
                </div>
                <icons.sprite.Eye width={20} className={styles.eye} />
              </div>
            );
          })}
        </div>
        <div className={clsx(styles.btnBlock, 'd-flex jc-b')}>
          <Button theme="primary" className={clsx(styles.btn, styles.btnLeft)}>
            Применить
          </Button>
          <Button theme="secondary" className={clsx(styles.btn, styles.btnRight)}>
            Отмена
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(ChoosingStyle);
