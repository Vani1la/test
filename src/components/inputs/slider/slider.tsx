import React from 'react';
import ReactSlider from 'react-slider';
import { Controller } from 'effector-react-form';
import cx from 'clsx';

// aliases: слайдер

type PublicProps = {
  className?: string; // class, класс, класснейм
  min?: number; // мин
  max?: number; // макс
  step?: number; // шаг
};

type Props = PublicProps & {
  controller: Controller;
  onAfterChange?: () => void;
  onBeforeChange?: () => void;
};

const Slider: React.FC<Props> = ({ controller, className, min, max, step, onAfterChange, onBeforeChange }) => {
  const {
    input: { value, onChange },
  } = controller();

  return (
    <ReactSlider
      className={cx('slider', 'react-slider', className)}
      thumbClassName={cx('slider__thumb', 'abs-centered-y')}
      trackClassName="slider__track"
      onChange={onChange}
      value={value}
      renderThumb={(props) => <span {...props} />}
      onAfterChange={onAfterChange}
      onBeforeChange={onBeforeChange}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default React.memo(Slider);
