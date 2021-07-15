import React, { useState } from 'react';
import { FormContext, FillingFormType } from '@md-modules/form';
import { Input, TextError } from './views';

const FormInput: React.FC<FillingFormType> = ({ label, name, type }) => {
  // Hooks
  const { state, setState } = React.useContext(FormContext);
  const currentItemq = state.find((el) => el.name === name);
  const currentIndexq = state.indexOf(currentItemq);

  let Valid = (event) => {
    const value = event.currentTarget.value;
    const currentItem = state.find((el) => el.name === name);
    const currentIndex = state.indexOf(currentItem);
  //    setState((state) => {
  //     const currentItem = state.find((el) => el.name === name);
  //     const currentIndex = state.indexOf(currentItem);

  //     if (value.length < currentItem.condition.symbolMin) {
  //       return state
  //         .slice(0, currentIndex)
  //         .concat({
  //           ...currentItem,
  //           isError: true
  //         })
  //         .concat(state.slice(currentIndex + 1));
  //     }
  //     return state
  //       .slice(0, currentIndex)
  //       .concat({
  //         ...currentItem,
  //         isBlur: true,
  //         isError: true
  //       })
  //       .concat(state.slice(currentIndex + 1));
  //   });
  // ;

//First Name
  if (value.length > currentItem.condition.symbolMax) {
    return state
      .slice(0, currentIndex)
      .concat({
        ...currentItem
      })
      .concat(state.slice(currentIndex + 1));
  } 
  if (value.length < currentItem.condition.symbolMin) {
    return state
      .slice(0, currentIndex)
      .concat({
        ...currentItem,
        isError: true
       })
      .concat(state.slice(currentIndex + 1));
  }


if () {
  
}
if () {
  
}
if (name === 'phoneNumber') {
  if (isNaN(+lastSymbol)) return value;
  if (value.length > 10) return value;
}
if (name === 'password' && value.length > 1) {
  return (
    !isNaN(+lastSymbol)
      ? setPasswordError({ ...passwordError, conditionsNumber: true })
      : lastSymbol === lastSymbol.toUpperCase()
      ? setPasswordError({ ...passwordError, conditionsLetter: true })
      : undefined,
    setValue(value)
  );
}


  };




  const handleChange = (event: { currentTarget: { value: string; name: string } }) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    // const lastSymbol = value[value.length - 1];
    // const isError = 8;
    // const errorMessage = 'd';

    setState((state) => {
      const currentItem = state.find((el) => el.name === name);
      const currentIndex = state.indexOf(currentItem);

      if (value.length > currentItem.condition.symbolMax) {
        return state
          .slice(0, currentIndex)
          .concat({
            ...currentItem
          })
          .concat(state.slice(currentIndex + 1));
      }
      return state
        .slice(0, currentIndex)
        .concat({
          ...currentItem,
          value: value
        })
        .concat(state.slice(currentIndex + 1));
    });

    // console.log(state);
  };

  const handleFocus = (event) => {
    setState((state) => {
      const currentItem = state.find((el) => el.name === name);
      const currentIndex = state.indexOf(currentItem);

      return state
        .slice(0, currentIndex)
        .concat({
          ...currentItem,
          isFocus: true,
          isError: false
        })
        .concat(state.slice(currentIndex + 1));
    });
  };

  const handleBlur = (event) => {
    const value = event.currentTarget.value;

     setState((state) => {
      const currentItem = state.find((el) => el.name === name);
      const currentIndex = state.indexOf(currentItem);

      if (value.length < currentItem.condition.symbolMin) {
        return state
          .slice(0, currentIndex)
          .concat({
            ...currentItem,
            isError: true
          })
          .concat(state.slice(currentIndex + 1));
      }
      return state
        .slice(0, currentIndex)
        .concat({
          ...currentItem,
          isBlur: true,
          isError: true
        })
        .concat(state.slice(currentIndex + 1));
    });
  };

  return (
    <>
      <Input
        border={6 ? 'red' : undefined}
        type={type}
        name={name}
        placeholder={label}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={state[currentIndexq].value}
      />

      <TextError>the {name} is entered incorrectly or includes too few characters</TextError>
    </>
  );
};

export default FormInput;
