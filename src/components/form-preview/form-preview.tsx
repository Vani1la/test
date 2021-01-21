import React, { useEffect } from 'react';
import { useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import { FormElement } from '@utils/text-parser';
import BaseInput from '@components/base-input';
import { createEvent, createStore } from 'effector';
import { SortableItem, SortableList } from '@components/sortable';
// import styles from './form-preview.module.scss';

const reset = createEvent();

const $values = createStore({}).reset(reset);
const $form = createStore({
  submitted: false,
  hasError: false,
  hasOuterError: false,
}).reset(reset);
const $outerErrorsInline = createStore({}).reset(reset);
const $errorsInline = createStore({}).reset(reset);
const $fieldsInline = createStore({}).reset(reset);

type Props = {
  config?: FormElement[];
};

const FormPreview: React.FC<Props> = ({ config }) => {
  const { controller } = useForm({ $values, $errorsInline, $fieldsInline, $form, $outerErrorsInline });
  const values = useStore($values);
  const inputs = config || [];

  useEffect(() => {
    reset();
  }, [config]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(oldIndex, newIndex);
  };

  return (
    <>
      <h3>Output</h3>

      <SortableList onSortEnd={onSortEnd} useDragHandle lockAxis="y">
        {inputs.map((input, index) => (
          <SortableItem index={index}>
            <BaseInput key={input.props.key} element={input} controller={controller} />
          </SortableItem>
        ))}
      </SortableList>

      <pre className="mt-3">{JSON.stringify(values, null, '  ')}</pre>
    </>
  );
};

export default React.memo(FormPreview);
