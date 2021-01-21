import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@components/inputs';
import clsx from 'clsx';
import icons from '@components/svg';
// @ts-ignore
import avatar from '@assets/account-page/avatar.png';
import styles from './header.module.scss';

type Props = {};

const Header: React.FC<Props> = () => {
  const [login] = React.useState(true);
  return (
    <div className="bg-white">
      <div className={`container d-flex jc-b ai-c ${styles.Header}`}>
        <div className="">
          <Link to="/" className={`logo fsz-18 text-bold ${styles.mainTextColor}`}>
            Form Creator
          </Link>
        </div>
        {login ? (
          <div className={clsx(styles.leftContent, 'd-flex jc-b ai-c')}>
            <Button theme="primary" className={clsx(styles.createFormBtn, 'fsz-14')}>
              Создать новую форму
            </Button>
            <div>
              <img src={avatar} alt="" className={styles.avatar} />
              <span className={clsx(styles.mainTextColor, styles.name, 'fsx-14')}>Иван Инванов</span>
            </div>
          </div>
        ) : (
          <div className={`fsz-14 text-normal ${styles.mainTextColor}`}>
            Login&nbsp;
            <icons.sprite.Arrow width={9} height={9} />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Header);
