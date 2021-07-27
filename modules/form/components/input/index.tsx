import React from 'react';
import { StateFormType } from '@md-form/components/type';
// views
import { Input, TextError } from '@md-form/views';

const FormInput: React.FC<StateFormType> = ({
  value,
  name,
  type,
  label,
  isError,
  errorMessage,
  handleChange,
  handleFocus,
  handleBlur
}) => {
  return (
    <>
      <Input
        value={value}
        name={name}
        type={type}
        placeholder={label}
        border={isError ? 'red300' : 'undefined'}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <TextError>{isError ? <TextError>{errorMessage}</TextError> : ''}</TextError>
    </>
  );
};

export default FormInput;
