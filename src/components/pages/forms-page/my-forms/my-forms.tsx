import React from 'react';
import icons from '@components/svg';
import clsx from 'clsx';
import { Checkbox, Button } from '@components/inputs';
import { useForm } from 'effector-react-form';
import styles from './my-forms.module.scss';

type Props = {};

const formList = [
  {
    text: 'Новый урок по Cinema 4D',
    name: 'checkBox1',
  },
  {
    text: 'October 2020 Newsletter – HSE Online Master of Data Science',
    name: 'checkBox2',
  },
  {
    text: 'Научись создавать лицо бренда: айдентика, гайдлайны, иллюстрации и иконки',
    name: 'checkBox3',
  },
  {
    text: 'Подробный разбор ваших логотипов в прямом эфире',
    name: 'checkBox4',
  },
];

const MyForms: React.FC<Props> = () => {
  const { controller } = useForm();
  return (
    <div className={clsx(styles.MyFolders, 'relative')}>
      <div className={clsx(styles.topPoints, 'absolute')}>
        <icons.standalone.PointsTriangle />
      </div>
      <div className={clsx(styles.leftPoints, 'absolute')}>
        <icons.standalone.PointersOne />
      </div>
      <div className={clsx(styles.botPoints, 'absolute')}>
        <icons.standalone.PointersTwo />
      </div>
      <div className="relative">
        <span className={clsx(styles.title, 'text-bold')}>Мои формы</span>
        <Button theme="primary" className={styles.mobileBtn}>
          Создать новую форму
        </Button>
      </div>
      <div className={clsx(styles.content, 'relative')}>
        {formList.map((item) => (
          <div className={styles.formItem} key={item.name}>
            <Checkbox controller={controller({ name: item.name })} label={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MyForms);
