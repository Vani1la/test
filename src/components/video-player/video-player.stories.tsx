import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import VideoPlayer from '@components/video-player/video-player';

const stories = storiesOf('video-player', module).addDecorator(centered);

stories.add('default', () => (
  <div style={{ width: '80vw', maxWidth: 864, height: 479 }}>
    <VideoPlayer title="Form Creator" subtitle="Lorem ipsum dolor sit amet, consectetur" />
  </div>
));
