import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { Controller } from 'effector-react-form';
import cn from 'clsx';
import '@scss/form.scss';

// aliases: телефон

type PublicProps = {
  className?: string; // class, класс, класснем
  classNameInput?: string; // классИнпут
  bgColor?: string; // бгКолор
  size?: 'sm' | 'md'; // размер
  placeholder?: string; // плейсхолдер
};

type Props = PublicProps & {
  controller: Controller;
};

const InputPhone: React.FC<Props> = ({
  className,
  classNameInput,
  controller,
  placeholder = '+7 (999) 999-99-99',
  bgColor = '#F5FAFE',
  size = 'md',
}) => {
  const {
    input: { value, ...restInput },
    isShowError,
    error,
  } = controller();

  return (
    <div
      className={cn('InputPhone', className, `size_${size}`, { error: isShowError })}
      style={{ '--bg-color': bgColor } as any}
    >
      <div className={cn('wrapInput', classNameInput)}>
        <PhoneInput
          {...restInput}
          value={value || ''}
          placeholder={placeholder}
          country="us"
          inputClass="phone__input"
          buttonClass="phone__btn"
          containerClass="phone__container"
          dropdownClass="phone__dropdown"
          inputStyle={{ height: '40px', fontSize: '14px', backgroundColor: '#fff', borderRadius: '2px 2px 0px 0px' }}
          dropdownStyle={{
            width: '340px',
            borderRadius: '4px',
            boxShadow: 'none',
            top: '35px',
            border: 'solid 1px #C2C6CB',
            borderTop: 'solid 1px #0081F1',
            left: '1px',
            maxHeight: '177px',
          }}
        />
      </div>

      {isShowError && <div className="errorMessage">{error}</div>}
    </div>
  );
};

export default React.memo(InputPhone);
