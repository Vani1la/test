import React, { useEffect, useState } from 'react';
import { Controller } from 'effector-react-form';
import { useDropzone } from 'react-dropzone';
import cx from 'clsx';

// aliases: файл

type PublicProps = {
  className?: string; // class, класснейм, класс
  type: 'brands' | 'categories' | 'products' | 'users'; // тип
};

type Props = PublicProps & {
  controller: Controller;
};

const DropzoneRectangle: React.FC<Props> = ({ controller, className }) => {
  const {
    input: { value, onChange },
    isShowError,
    error,
  } = controller();
  const [src, setSrc] = useState(value);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onChange,
    multiple: false,
    accept: ['.png', '.jpeg', '.jpg'],
  });

  useEffect(() => {
    if (value) {
      setSrc(value.url);
    }
  }, [value]);

  const isHasValue = Boolean(value && value.url);

  return (
    <>
      <div
        {...getRootProps()}
        className={cx('rectangle__dropzone', className, { ['rectangle__dropzoneWithValue']: isHasValue })}
      >
        <input {...getInputProps()} />

        {isHasValue && <img className="rectangle__imagePreview" src={src} alt="product preview" />}

        {!isHasValue && (
          <div className="rectangle__uploadHelpInfo">
            <div className={cx('text-center fsz-20', 'rectangle__uploadHelpInfoTitle')}>
              Drag and drop an image file here or click
            </div>
            <div className="rectangle__icon" />
          </div>
        )}
      </div>
      {isShowError && <div className="rectangle__errorMessage">{error}</div>}
    </>
  );
};

export default React.memo(DropzoneRectangle);
