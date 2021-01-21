import React from 'react';
import ReactResponsiveModal from 'react-responsive-modal';
import cx from 'clsx';
import styles from './modal.module.scss';

type Props = {
  isOpen?: boolean;
  center?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNameContent?: string;
  classNameTitle?: string;
  classNameModal?: string;
  classNameClose?: string;
  closeOnOverlayClick?: boolean;
  fullWidth?: boolean;
  title?: React.ReactNode;
};

const Modal: React.FC<Props> = ({
  isOpen,
  center = false,
  onClose,
  children,
  classNameContent,
  classNameTitle,
  classNameModal,
  classNameClose,
  closeOnOverlayClick = true,
  fullWidth = false,
  title,
}) => {
  const animationEnd = React.useCallback(() => {
    if (!isOpen) {
      document.documentElement.classList.remove('is-modal-opened');
      document.documentElement.classList.remove('is-active-padding-fix');
    }
  }, [isOpen]);

  return (
    <>
      <ReactResponsiveModal
        classNames={{
          closeIcon: styles.closeIcon,
          closeButton: cx(styles.closeButton, classNameClose),
          modal: cx(styles.modal, classNameModal, { 'w-100': fullWidth }),
        }}
        open={isOpen}
        onClose={onClose}
        center={center}
        animationDuration={200}
        blockScroll={false}
        onAnimationEnd={animationEnd}
        closeOnOverlayClick={closeOnOverlayClick}
      >
        <div className={cx('p-5 pt-8', classNameContent)} style={{ backgroundColor: 'white' }}>
          {title && <h2 className={cx('mt-n4 mb-2 fsz-28 pr-3', styles.title, classNameTitle)}>{title}</h2>}
          {children}
        </div>
      </ReactResponsiveModal>
    </>
  );
};

export default React.memo(Modal);
