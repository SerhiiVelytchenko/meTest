import React from 'react';
import { Context, StateFormType } from '@md-form/components/type';
import { FormContext } from '@md-modules/form';
import { Input, TextError } from './views';
import { ValidationChange, ValidationBlur } from '@md-modules/form/components/validation/index';

const stateFormDefolt = {
  label: '',
  type: '',
  name: 'firstName',
  isError: false,
  isFocus: false,
  value: '',
  errorMessage: '',
  condition: {
    symbolMin: 5,
    symbolMax: 50
  }
};

const FormInput: React.FC<StateFormType> = ({ label, name, type, value }) => {
  // Hooks
  const { stateForm, handleStateForm } = React.useContext<Context>(FormContext);

  const currentItem = stateForm.find((el: { name: string }) => el.name === name) || stateFormDefolt;
  const currentIndex = stateForm.indexOf(currentItem);

  const isError = currentItem?.isError;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    ValidationChange(value, name, currentItem, currentIndex, handleStateForm);
  };

  const handleFocus = () => {
    handleStateForm(currentIndex, currentItem, { isError: false });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    ValidationBlur(value, name, currentItem, currentIndex, handleStateForm);
  };

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
      <TextError>{isError ? <TextError>{currentItem?.errorMessage}</TextError> : ''}</TextError>
    </>
  );
};

export default FormInput;
