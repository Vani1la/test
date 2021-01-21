import React from 'react';
import icons from '@components/svg';
import clsx from 'clsx';
import styles from './features.module.scss';
import Feature from '../feature';

type Props = {};

const featuresData = [
  {
    svg: <icons.sprite.EzForms width={45} height={45} />,
    desc: (
      <div>
        Новый, уникальный подход
        <br /> к созданию форм быстро
        <br /> и просто
      </div>
    ),
    id: 1,
  },
  {
    svg: <icons.sprite.Users width={45} height={45} />,
    desc: (
      <div>
        Более N компаний
        <br /> и N пользователей
        <br /> используют сервис
      </div>
    ),
    id: 2,
  },
  {
    svg: <icons.sprite.CastomCode width={42} height={42} />,
    desc: (
      <div>
        Полная кастомизация
        <br />
        визуальной части через
        <br />
        редактор или средства CSS
      </div>
    ),
    id: 3,
  },
  {
    svg: <icons.sprite.Code width={45} height={45} />,
    desc: (
      <div>
        Возможность кастомизации
        <br />
        логики формы через
        <br /> расширение UI компонентов
        <br /> написанных на React js
      </div>
    ),
    id: 4,
  },
  {
    svg: <icons.sprite.Mobile width={45} height={45} />,
    desc: (
      <div>
        Возможность подключения
        <br /> собственных компонентов UI
      </div>
    ),
    id: 5,
  },
  {
    svg: <icons.sprite.Api width={45} height={45} />,
    desc: (
      <div>
        Простое API позволяющее
        <br /> легко интегрировать сервис
        <br /> с вашим сайтом и<br /> CRM системами
      </div>
    ),
    id: 6,
  },
  {
    svg: <icons.sprite.Developers width={45} height={45} />,
    desc: (
      <div>
        Возможность заказа уникальных
        <br /> решений со стороны
        <br /> разработчиков сервиса для
        <br /> индивидуальных потребностей
      </div>
    ),
    id: 7,
  },
];

const Features: React.FC<Props> = () => {
  // @ts-ignore
  return (
    <section className={styles.Features}>
      <div className={clsx(styles.content, 'container relative')}>
        <div className={clsx(styles.vector, 'absolute')}>
          <icons.standalone.BlueTriangle />
        </div>
        <div className={clsx(styles.mainTextColor, styles.title, 'text-center text-bold fsz-24')}>
          Особенности сервиса
        </div>
        <div className={clsx(styles.features, 'd-flex jc-a f-wrap')}>
          {featuresData.map((data) => (
            <Feature svg={data.svg} desc={data.desc} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);
