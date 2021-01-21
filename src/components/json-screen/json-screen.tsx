import React from 'react';
import { getWidthOfStringInPx } from '@utils/js/string';
import styles from './json-screen.module.scss';

type Props = {
  values: object;
};

const JsonScreen: React.FC<Props> = ({ values }) => {
  const [jsonInfo, setJsonInfo] = React.useState<object>({});
  const fakeSpan = React.useRef();
  const newValues = {};
  const maxWidthText = 190;
  const maxWidthKey = 130;
  React.useEffect(() => {
    Object.keys(values).forEach((key) => {
      let widthKey = getWidthOfStringInPx(fakeSpan.current, `"${key}": `);
      let widthValue = getWidthOfStringInPx(fakeSpan.current, `"${values[key]}"`);
      let newKey;
      let newValue;
      let counterKey = key.length - 1;
      if (widthKey > maxWidthKey) {
        while (widthKey > maxWidthKey) {
          counterKey--;
          newKey = `${key.slice(0, counterKey)}...`;
          widthKey = getWidthOfStringInPx(fakeSpan.current, `"${newKey}": `);
        }
      } else {
        newKey = key;
      }

      let counterValue = values[key].length - 1;
      if (widthKey + widthValue > maxWidthText) {
        while (widthKey + widthValue > maxWidthText) {
          counterValue--;
          newValue = `${values[key].slice(0, counterValue)}...`;
          widthValue = getWidthOfStringInPx(fakeSpan.current, `"${newValue}"`);
        }
      } else {
        newValue = values[key];
      }
      newValues[newKey] = newValue;
    });

    setJsonInfo(newValues);
  }, [values]);

  return (
    <div className={styles.JsonScreen}>
      <pre>
        <span id="fakeSpan" className={styles.fakeSpan} ref={fakeSpan} />
        {JSON.stringify(jsonInfo, null, '  ')}
      </pre>
    </div>
  );
};

export default React.memo(JsonScreen);
