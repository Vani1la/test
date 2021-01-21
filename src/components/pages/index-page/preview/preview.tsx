import React from 'react';
import icons from '@components/svg';
import VideoPlayer from '@components/video-player/video-player';
import clsx from 'clsx';
import styles from './preview.module.scss';

type Props = {};

const Preview: React.FC<Props> = () => {
  return (
    <section className={styles.Preview}>
      <div className={clsx(styles.content, 'container relative')}>
        <div className={clsx(styles.points, 'absolute')}>
          <icons.standalone.PointersTriangle />
        </div>
        <div className={clsx(styles.whitePosts, 'absolute')}>
          <icons.standalone.WhitePosts />
        </div>
        <div className={clsx(styles.bluePosts, 'absolute')}>
          <icons.standalone.BluePosts />
        </div>
        <div className={clsx(styles.whitePost, 'absolute')}>
          <icons.standalone.WhitePost />
        </div>
        <div className={clsx(styles.stick, 'absolute')}>
          <icons.standalone.Stick />
        </div>
        <div className={clsx(styles.player, 'relative')}>
          <VideoPlayer title="Form Creator" subtitle="Lorem ipsum dolor sit amet, consectetur" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Preview);
