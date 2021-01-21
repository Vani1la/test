import React from 'react';
import icons from '@components/svg';
import clsx from 'clsx';
import styles from './example.module.scss';

type Props = {};

const Example: React.FC<Props> = () => {
  return (
    <section className={styles.Example}>
      <div className={clsx(styles.content, 'd-flex container relative')}>
        <div className={clsx(styles.pointersTop, 'absolute')}>
          <icons.standalone.MinPointersTriangle />
        </div>
        <div className={clsx(styles.pointersBot, 'absolute')}>
          <icons.standalone.MinPointersTriangle />
        </div>
        <div className={clsx(styles.bluePosts, 'absolute')}>
          <icons.standalone.BluePosts />
        </div>

        <div className={`${styles.text}`}>
          <div className={clsx(styles.mainTextColor, styles.mainText, 'text-bold')}>
            Form Сreator — это сервис с мощным функционалом для быстрого создания
            <span className="text-normal"> квизов, опросников, брифов, форм обратной связи и тд.</span>
          </div>
          <ol className={clsx(styles.list, 'fsz-14 fsz-lg-16')}>
            <li>&nbsp;Создайте форму</li>
            <li className={styles.longLi}>&nbsp;Получите ссылку или добавьте форму на ваш сайт.</li>
            <li>&nbsp;Интегрируйте с CRM, онлайн документами (Word, Excel) или получайте данные на почту</li>
          </ol>
        </div>
        <div className={styles.formBlock}>
          <div className={clsx(styles.formContent, 'h-100 w-100')}></div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Example);
