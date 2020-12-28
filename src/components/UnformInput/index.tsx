import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const UnformInput: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={clearError}
        {...rest}
      />

      {error && <span className='error'>{error}</span>}
    </>
  );
};

export default UnformInput;
