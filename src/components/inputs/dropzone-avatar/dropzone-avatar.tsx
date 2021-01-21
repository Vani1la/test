import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller } from 'effector-react-form';
import cx from 'clsx';
import Icons from '@components/svg';

export type File = {
  preview: string;
  file: any;
  blob: Blob;
};

// aliases: аватар

type PublicProps = {
  className?: string; // class, класс, класснейм
};

type Props = PublicProps & {
  controller: Controller;
};

const DropzoneAvatar: React.FC<Props> = ({ controller, className }) => {
  const {
    input: { value, onChange },
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

  return (
    <div>
      <div {...getRootProps()} className={cx('avatar__dropzone', className)}>
        <input {...getInputProps()} />
        <span className={cx('avatar__icon', 'abs-centered')}>
          <Icons.sprite.SearchImage width={30} />
        </span>
        {value && <img className="avatar__imagePreview" src={src} alt="avatar preview" />}
      </div>
    </div>
  );
};

export default React.memo(DropzoneAvatar);
