import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface Props {
  name: string;
  label?: string;
}

type DatalistProps = JSX.IntrinsicElements['datalist'] & Props;

const UnformDataList: React.FC<DatalistProps> = ({ name, label, ...rest }) => {
  const datalistRef = useRef<HTMLDataListElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: datalistRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <datalist
        id={fieldName}
        ref={datalistRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
};

export default UnformDataList;
