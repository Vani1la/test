import React from 'react';
import { useStore } from 'effector-react';
import clsx from 'clsx';
import { svgIcons } from '@utils/intellisense-config';
import Scrollbar from '@components/scrollbar';
import {
  $componentInfo,
  $helpItems,
  $viewHelp,
  setChooseHelp,
  $chooseHelp,
  $positionHelpDropdown,
  replaceTextEvent,
  keyDropdownEvent,
} from '@store/editor/intellisense-dropdown';
import useDropdown from '@hooks/use-dropdown';
import Dropdown from '@components/dropdown/dropdown';
import styles from './intellisense-dropdown.module.scss';

type Props = {};

const IntellisenseDropdown: React.FC<Props> = () => {
  const position = useStore($positionHelpDropdown);
  const componentInfo = useStore($componentInfo);
  const activeItem = useStore($chooseHelp);
  const helpItems = useStore($helpItems);
  const viewHelp = useStore($viewHelp);
  const { refContent, refTrigger } = useDropdown('IntellisenseDropdown');

  const heightLi = 70;
  let heightBlock;
  if (helpItems.length > 4) {
    heightBlock = heightLi * 4 + 2;
  } else {
    heightBlock = heightLi * helpItems.length + 2;
  }

  React.useEffect(() => {
    const selectManager = (e) => {
      e.dropdown = refContent.current;
      keyDropdownEvent(e);
    };

    document.addEventListener('keydown', selectManager);
    document.addEventListener('mousedown', selectManager);
    return () => {
      document.removeEventListener('keydown', selectManager);
      document.removeEventListener('mousedown', selectManager);
    };
  }, []);

  const onMouseEnter = (index) => {
    setChooseHelp(index);
  };

  return (
    <Dropdown
      refContent={refContent}
      refTrigger={refTrigger}
      isOpen={viewHelp}
      trigger={<div ref={refTrigger} className="absolute sss" style={position} />}
    >
      <Scrollbar style={{ width: 353, height: heightBlock, border: '0.5px solid #4BB7D4' }}>
        <ul className={styles.content}>
          {helpItems.map((item, index) => {
            if (componentInfo.typeText === 'component') {
              return (
                <li
                  key={item.key}
                  className={clsx(styles.helpItem, activeItem === index ? styles.active : null, 'd-flex ai-c')}
                  onClick={() => {
                    replaceTextEvent(index);
                  }}
                  onMouseEnter={() => onMouseEnter(index)}
                >
                  {svgIcons[item.svg]}
                  <div className={styles.componentText}>{item.helpText}</div>
                </li>
              );
            }
            return (
              <li
                key={item.key}
                className={clsx(styles.helpItem, activeItem === index ? styles.active : null, 'd-flex ai-c jc-b')}
                onClick={() => {
                  replaceTextEvent(index);
                }}
                onMouseEnter={() => onMouseEnter(index)}
              >
                <div className={clsx(styles.help, 'd-flex')}>
                  {svgIcons[item.svg]}
                  <div className={styles.propsText}>
                    <span className={styles.enteredWord}>{componentInfo.word}</span>
                    {item.helpText.slice(componentInfo.word.length)}
                  </div>
                </div>
                <span className={styles.type}>{item.type ? item.type : null}</span>
              </li>
            );
          })}
        </ul>
      </Scrollbar>
    </Dropdown>
  );
};

export default React.memo(IntellisenseDropdown);
