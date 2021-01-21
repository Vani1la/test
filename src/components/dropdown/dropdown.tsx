import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { setTriggerPosition, $contentIndent } from '@store/dropdown';
import { useStore } from 'effector-react';

type Props = {
  children: any;
  trigger: any;
  isOpen: boolean;
  refTrigger: any;
  className?: string;
  refContent: any;
};

const Dropdown: React.FC<Props> = ({ children, trigger, isOpen, refTrigger, refContent, className }) => {
  const indent = useStore($contentIndent);
  let mount = document.getElementById('dropdown-root');
  const el = useMemo(() => document.createElement('div'), []);

  const update = () => {
    // @ts-ignore
    setTriggerPosition(refTrigger.current);
  };

  useEffect(() => {
    if (!mount) {
      mount = document.getElementById('dropdown-root');
    }
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  useEffect(() => {
    update();
  }, [isOpen]);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className={className}>
      {trigger}
      {createPortal(
        <div>
          {isOpen ? (
            <div className="absolute" ref={refContent} style={{ top: indent.top, left: indent.left }}>
              {children}
            </div>
          ) : null}
        </div>,
        el,
      )}
    </div>
  );
};

export default React.memo(Dropdown);
