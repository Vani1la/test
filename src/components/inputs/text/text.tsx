import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './text.module.scss';

// aliases: текс

type Props = {
  lines: string[];
};

const Text: React.FC<Props> = ({ lines: linesProp }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines(linesProp.map((line) => ({ str: line, key: uuid() })));
  }, [linesProp]);

  return (
    <div className={styles.text}>
      {lines.map((line) => (
        <span key={line.key} className="line">
          {line.str}
          <br />
        </span>
      ))}
    </div>
  );
};

export default React.memo(Text);
