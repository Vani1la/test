import React, { useCallback, useMemo } from 'react';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { GroupedOptionsType, OptionsType, OptionTypeBase } from 'react-select/src/types';
import { Controller } from 'effector-react-form';
import styles from './input-select.module.scss';

// aliases: выбор

type PublicProps = {
  isMulti?: boolean;
  size?: 'sm' | 'md'; // размер
  label?: React.ReactNode; // лейбл
  isLoading?: boolean; // загружен
  creatable?: boolean;
};

type Props = PublicProps & {
  options?: GroupedOptionsType<OptionTypeBase> | OptionsType<OptionTypeBase>;
  defaultValue?: OptionTypeBase;
  controller: Controller;
  onFocus?: (e?: any) => void;
  onChangeInput?: (value: string) => void;
};

const sizeMap = {
  sm: '40px',
  md: '50px',
};

const InputSelect: React.FC<Props> = ({
  isMulti,
  defaultValue,
  options,
  controller,
  size = 'md',
  label,
  isLoading,
  onFocus: onFocusProp,
  onChangeInput,
  creatable,
}) => {
  const { input, isShowError, error } = controller();
  const inputBorder = isShowError ? '1px solid #D93025' : '1px solid #0081F1';

  const customStyles = useMemo(
    () => ({
      control: (base) => ({
        ...base,
        '&:hover': {
          border: inputBorder,
        },
        '&:focus': {
          border: inputBorder,
        },
        '&:active': {
          border: inputBorder,
        },
        boxShadow: null,
        border: isShowError ? '1px solid #D93025' : '1px solid #C2C6CB',
        minHeight: sizeMap[size],
        backgroundColor: 'transparent',
      }),
    }),
    [isShowError],
  );

  const onFocus = useCallback(
    (e) => {
      if (onFocusProp) {
        onFocusProp(e);
      }

      input.onFocus(e);
    },
    [onFocusProp],
  );

  const props = {
    ...input,
    onFocus,
    defaultValue,
    isMulti,
    options,
    styles: customStyles,
    active: true,
    isLoading,
    onInputChange: onChangeInput,
  };

  return (
    <div className={styles.wrap}>
      {label && <div className={styles.label}>{label}</div>}
      {creatable ? <CreatableSelect {...props} /> : <ReactSelect {...props} />}
      {isShowError && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default React.memo(InputSelect);
