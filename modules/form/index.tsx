import React, { useState, useMemo } from 'react';
// views
import { Wrapper, InputWrapper, Form, Input } from './views';
import FormInput from '@md-modules/form/components/input/index';

export interface FillingFormType {
  label: string;
  name: string;
}

export interface StateDefoltType {
  name: string;
  isError: boolean;
  isFocus: boolean;
  value: string;
  errorMessage: string;
  condition?: any;
}

export interface Context {
  state: StateDefoltType[];
  setState: {
    (state: StateDefoltType[]): void;
    (arg0: {
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
    }): void;
  };
}

const FormContext = React.createContext<Context>({
  state: [],
  setState: () => {}
});

const fillingForm: FillingFormType[] = [
  {
    label: 'First Name',
    name: 'firstName'
  },
  {
    label: 'Last Name',
    name: 'lastName'
  },
  {
    label: 'Email',
    name: 'email'
  },
  {
    label: 'PhoneNumber',
    name: 'phoneNumber'
  },
  {
    label: 'Password',
    name: 'password'
  }
];

const stateDefolt: StateDefoltType[] = [
  {
    name: 'firstName',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: '',
    condition: {
      symbolMin: 5,
      symbolMax: 50
    }
  },
  {
    name: 'lastName',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: '',
    condition: {
      symbolMin: 5,
      symbolMax: 50
    }
  },
  {
    name: 'email',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: ''
  },
  {
    name: 'phoneNumber',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: '',
    condition: {
      symbolMax: 10
    }
  },
  {
    name: 'password',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: '',
    condition: {
      numberMinOne: false,
      bigletterMinOne: false
    }
  }
];

const FormPage = () => {
  const [state, setState] = useState(stateDefolt);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    setState((state) => {
      const newState: StateDefoltType[] = [];
      state.forEach((item) => {
        if (item.value.length === 0) {
          return newState.push({ ...item, isError: true, errorMessage: 'field must be filled' });
        }
        return newState.push(item);
      });
      return newState;
    });

    const data = state.map((item) => `${item.name}: ${item.value}`);

    return console.log(data);
  };
  return (
    <FormContext.Provider
      value={useMemo(
        () => ({
          state,
          setState
        }),
        [state]
      )}
    >
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          {fillingForm.map((elem) => (
            <FormInput key={elem.label} label={elem.label} name={elem.name} />
          ))}
          <InputWrapper>
            <Input type='submit' />
          </InputWrapper>
        </Form>
      </Wrapper>
    </FormContext.Provider>
  );
};

export { FormPage, FormContext };
