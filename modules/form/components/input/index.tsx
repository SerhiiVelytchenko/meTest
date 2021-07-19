import React from 'react';
import { StateDefoltType, Context } from '@md-form/index';
import { FormContext, FillingFormType } from '@md-modules/form';
import { Input, TextError } from './views';
import { ValidChange, ValidBlur } from '@md-form/components/valid/index';

const stateDefolt = {
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

const FormInput: React.FC<FillingFormType> = ({ label, name }) => {
  // Hooks
  const { state, setState } = React.useContext<Context>(FormContext);

  const type = name === 'password' ? 'password' : 'text';
  const currentItem = state.find((el: { name: string }) => el.name === name) || stateDefolt;
  const currentIndex = state.indexOf(currentItem);

  const isError = currentItem?.isError;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    ValidChange(event, state, setState);
  };

  const handleFocus = () => {
    setState((state: StateDefoltType[]) => {
      return state
        .slice(0, currentIndex)
        .concat({ ...currentItem, isError: false })
        .concat(state.slice(currentIndex + 1));
    });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    ValidBlur(event, state, setState);
  };

  return (
    <>
      <Input
        border={isError ? 'red300' : 'undefined'}
        type={type}
        name={name}
        placeholder={label}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={state[currentIndex].value}
      />
      <TextError>{isError ? <TextError>{currentItem?.errorMessage}</TextError> : ''}</TextError>
    </>
  );
};

export default FormInput;
