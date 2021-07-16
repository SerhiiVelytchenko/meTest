import React from 'react';
import { FormContext } from '@md-modules/form';

export const ValidChange = (event: { currentTarget: { name: any; value: any; }; }) => {
  const { state, setState } = React.useContext(FormContext);

  const currentItem = state.find((el: { name: any }) => el.name === event.currentTarget?.name);
  const currentIndex = state.indexOf(currentItem);
  const value = event.currentTarget.value;

  switch (event.currentTarget?.name) {
    case 'firstName':
      setState((state: any) => {
        if (value.lenfth === 0) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true })
            .concat(state.slice(currentIndex + 1));
        }
      });
      break;
    case 'lastName':
      setState((state: any) => {
        if (value.lenfth === 0) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true })
            .concat(state.slice(currentIndex + 1));
        }
      });
      break;
    case 'email':
      setState((state: any) => {
        if (value.lenfth === 0) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true })
            .concat(state.slice(currentIndex + 1));
        }
      });
      break;
    case 'phoneNumber':
      setState((state: any) => {
        if (value.lenfth === 0) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true })
            .concat(state.slice(currentIndex + 1));
        }
      });
      break;
    case 'password':
      setState((state: any) => {
        if (value.lenfth === 0) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true })
            .concat(state.slice(currentIndex + 1));
        }
      });
      break;
  }
};
