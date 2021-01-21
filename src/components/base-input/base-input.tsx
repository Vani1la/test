import React, { createElement } from 'react';
import mapComponents, { aliases, propsAliases } from '@utils/map-components';
import { FormElement } from '@utils/text-parser';
import { ControllerHof } from 'effector-react-form';
// import styles from './base-input.module.scss';

type Props = { element: FormElement; controller: ControllerHof };

const BaseInput: React.FC<Props> = ({ element, controller }: Props) => {
  const currentComponentName = aliases[element.component] || element.component;
  const component = mapComponents[currentComponentName];
  const filtersProps = {};
  Object.keys(element.props).forEach((prop) => {
    filtersProps[propsAliases[prop] || prop] = element.props[prop];
  });
  if (!component) {
    return null;
  }

  const props = {
    ...filtersProps,
    controller: controller({ name: element.props.key }),
  };

  return <div className="mt-3">{createElement(component, props)}</div>;
};

export default React.memo(BaseInput);
