import React from 'react';
import { Controller } from 'effector-react-form';
import Input from '@components/inputs/input';
import cn from 'clsx';
import { Button } from '@components/inputs';

// aliases: вводСтраны

type PublicProps = {
  className?: string; // class, класс, класснейм
  min?: number; // мин, минимум
  max?: number; // макс, максимум
  maxlength?: number; // максимальнаяДлина
};

type Props = PublicProps & {
  controller: Controller;
};

const InputCounter: React.FC<Props> = ({ className, controller, min, max, maxlength }) => {
  const {
    input: { onChange, value },
  } = controller();

  const inputLastValidValueRef = React.useRef(value);

  const onInc = (val) => {
    onChange(parseInt(val, 10) + 1);
  };

  const onDec = (val) => {
    if (val > 1) {
      onChange(val - 1);
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget;
    const val = parseInt(input.value, 10);
    const isNotEmptyString = input.value !== '';
    const lastValidValue = inputLastValidValueRef.current;
    const isInvalid = (Boolean(max) && val > max) || (Boolean(min) && val < min) || Number.isNaN(val);
    if (isInvalid) {
      if (isNotEmptyString) {
        if (Boolean(max) && val > max) {
          onChange(max);
        } else if (Boolean(min) && val < min) {
          onChange(min);
        } else {
          onChange(lastValidValue);
        }
      }
      return;
    }

    if (maxlength && input.value.length > maxlength) {
      onChange(input.value.slice(0, maxlength));
    }

    onChange(val);
    inputLastValidValueRef.current = val;
  };

  const onBlur = ({ target }) => {
    if (!target.value) {
      onChange(min || 1);
    }
  };

  return (
    <div className={cn('inputCounter', className)}>
      <Button onClick={() => onDec(value)} className="inputCounter__btn">
        –
      </Button>
      <Input
        controller={controller}
        type="number"
        className="inputCounter__input"
        classNameFieldSet="inputCounter__fieldSet"
        classNameInput="inputCounter__innerInput"
        onKeyUp={handleChange}
        onBlur={onBlur}
      />
      <Button onClick={() => onInc(value)} className="inputCounter__btn">
        +
      </Button>
    </div>
  );
};

export default React.memo(InputCounter);
