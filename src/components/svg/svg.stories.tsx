import React from 'react';
import { storiesOf } from '@storybook/react';
import icons from '@components/svg';
// import Button from '@components/ui/inputs/button/button';
import copy from 'copy-to-clipboard';

const stories = storiesOf('svg', module).addParameters({
  layout: 'centered',
});
const styles = {
  iconPreview: {},
  iconName: {},
  iconUsage: {
    cursor: 'pointer',
  },
};
// Sprite icons
stories.add('sprite', () => {
  const copyToCB = (val) => {
    copy(val);
  };

  const makeJSXIconString = (componentName) => `<${componentName} />`;
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gridGap: '10px',
        }}
      >
        {Object.keys(icons.sprite).map((iconName) => {
          const IconComponent = icons.sprite[iconName];
          return (
            <div key={iconName} style={styles.iconPreview}>
              <div className="d-flex ai-c">
                <IconComponent className="ic" width={60} height={60} />
                <div className="ml-3">
                  <div style={styles.iconName}>{iconName}</div>
                  <button
                    type="button"
                    className="mt-2 p-2 bg-primary color-white"
                    style={styles.iconUsage}
                    onClick={() => {
                      copyToCB(makeJSXIconString(`icons.sprite.${iconName}`));
                    }}
                  >{`icons.sprite.${iconName}`}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});
