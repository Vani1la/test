import React from 'react';
import styles from '@components/video-player/video-player.module.scss';
import '@/../node_modules/video-react/dist/video-react.css';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import clsx from 'clsx';
import icons from '@components/svg';
// @ts-ignore
import preview from '@assets/index-page/video.png';

type Props = {
  title: string;
  subtitle: string;
};

const VideoPlayer: React.FC<Props> = ({ title, subtitle }) => {
  const [visiblePlay, setVisiblePlay] = React.useState(true);
  const [visibleText, setVisibleText] = React.useState(true);
  let playerManadger;
  const setPlay = () => {
    playerManadger.play();
    setVisiblePlay(false);
    setVisibleText(false);
  };

  const setPause = () => {
    playerManadger.pause();
    setVisiblePlay(true);
  };

  const restartVideo = () => {
    playerManadger.replay(9999);
  };

  return (
    <div className={styles.VideoPlayer}>
      <Player
        className={styles.player}
        ref={(player) => {
          playerManadger = player;
        }}
        fluid={false}
        width="100%"
        height="100%"
        poster={preview}
        src="https://html5book.ru/examples/media/martynko.mp4"
      >
        <BigPlayButton position="center" className={styles.bigPlayBtn} />
        <ControlBar disableDefaultControls disableCompletely />
      </Player>
      <div className={styles.partition} />
      {visiblePlay ? (
        <div>
          <div className={`${styles.playBlock}`} onClick={setPlay}>
            <icons.sprite.Play />
          </div>
          {visibleText ? (
            <div className={clsx(styles.text, 'absolute')}>
              <div className={clsx(styles.title, 'text-bold')}>{title}</div>
              <div className={styles.subtitle}>{subtitle}</div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={`${styles.manadgerBlock} d-flex jc-b`}>
          <div className={styles.return} onClick={restartVideo}>
            <icons.sprite.Replay width={38} height={38} />
          </div>
          <div className={styles.pause} onClick={setPause}>
            <icons.sprite.Pause width={31} height={36} />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(VideoPlayer);
