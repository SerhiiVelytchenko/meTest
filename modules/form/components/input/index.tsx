import React from 'react';
import { FormContext, FillingFormType } from '@md-modules/form';
import { Input, TextError } from './views';

const FormInput: React.FC<FillingFormType> = ({ label, name }) => {
  // Hooks
  const { state, setState } = React.useContext(FormContext);

  const type = name === 'password' ? 'password' : 'text';
  const currentItem = state.find((el: { name: string }) => el.name === name);
  const currentIndex = state.indexOf(currentItem);

  const isError = currentItem.isError;
  const numberMinOne = currentItem.condition?.numberMinOne;
  const bigletterMinOne = currentItem.condition?.bigletterMinOne;

  const validChange = (event: { currentTarget: { value: any } }) => {
    const value = event.currentTarget.value;
    const lastSymbol = value[value.length - 1];

    switch (name) {
      case 'firstName':
        setState((state: any) => {
          if (value.length > currentItem.condition.symbolMax) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'lastName':
        setState((state: any) => {
          if (value.length > currentItem.condition.symbolMax) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'email':
        setState((state: any) => {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'phoneNumber':
        setState((state: any) => {
          if (value.length > currentItem.condition.symbolMax) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          if (isNaN(+lastSymbol)) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'password':
        setState((state: any) => {
          if (!isNaN(+lastSymbol)) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, value: value, condition: { ...currentItem.condition, numberMinOne: true } })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length >= 1 && isNaN(+lastSymbol) && lastSymbol === lastSymbol?.toUpperCase()) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, value: value, condition: { ...currentItem.condition, bigletterMinOne: true } })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
    }
  };

  const validBlur = (event: { currentTarget: { value: any } }) => {
    const value = event.currentTarget.value;
    const lastSymbol = value[value.length - 1];
    const isMail = value.includes('@');

    switch (name) {
      case 'firstName':
        setState((state: any) => {
          if (value.length > currentItem.condition.symbolMax) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length < currentItem.condition.symbolMin) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: true, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length > currentItem.condition.symbolMin) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: false, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'lastName':
        setState((state: any) => {
          if (value.length > currentItem.condition.symbolMax) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length < currentItem.condition.symbolMin) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: true, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length > currentItem.condition.symbolMin) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: false, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'email':
        setState((state: any) => {
          if (!isMail) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: true, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          if (isMail) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: false, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length < 1) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: true, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'phoneNumber':
        setState((state: any) => {
          if (value.length < 1) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: true, value: value })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length > currentItem.condition.symbolMax) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          if (isNaN(+lastSymbol)) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value })
            .concat(state.slice(currentIndex + 1));
        });
        break;
      case 'password':
        setState((state: any) => {
          const isError = !(numberMinOne && bigletterMinOne);
          // const isError = numberMinOne && bigletterMinOne ? false : true;
          if (value.length === 0) {
            return state
              .slice(0, currentIndex)
              .concat({ ...currentItem, isError: true, value: value })
              .concat(state.slice(currentIndex + 1));
          }

          if (!isNaN(+lastSymbol)) {
            const isError = !bigletterMinOne;
            return state
              .slice(0, currentIndex)
              .concat({
                ...currentItem,
                value: value,
                isError: isError,
                condition: { ...currentItem.condition, numberMinOne: true }
              })
              .concat(state.slice(currentIndex + 1));
          }
          if (value.length >= 1 && isNaN(+lastSymbol) && lastSymbol === lastSymbol?.toUpperCase()) {
            const isError = !numberMinOne;
            return state
              .slice(0, currentIndex)
              .concat({
                ...currentItem,
                value: value,
                isError: isError,
                condition: { ...currentItem.condition, bigletterMinOne: true }
              })
              .concat(state.slice(currentIndex + 1));
          }
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, value: value, isError: isError })
            .concat(state.slice(currentIndex + 1));
        });
        break;
    }
  };

  const handleChange = (event: any) => {
    validChange(event);
  };

  const handleFocus = () => {
    setState((state: any) => {
      return state
        .slice(0, currentIndex)
        .concat({ ...currentItem, isError: false })
        .concat(state.slice(currentIndex + 1));
    });
  };

  const handleBlur = (event: any) => {
    validBlur(event);
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
      <TextError>{isError ? <TextError>{currentItem.errorMessage}</TextError> : ''}</TextError>
    </>
  );
};

export default FormInput;
