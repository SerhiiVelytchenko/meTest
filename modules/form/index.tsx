import React, { useState, useMemo } from 'react';
// views
import { Wrapper, ButtonWrapper, Form, Button } from './views';
import FormInput from '@md-modules/form/components/input/index';
// import Button from './components/button';

export interface FillingFormType {
  label: string;
  name: string;
  type: string;
}

interface Context {
  state: any;
  setState: (state: any) => void;
}

const FormContext = React.createContext<Context>({
  state: [],
  setState: () => {}
});

const fillingForm: FillingFormType[] = [
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    label: 'PhoneNumber',
    name: 'phoneNumber',
    type: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password'
  }
];

const StateDefolt = [
  {
    name: 'firstName',
    isError: false,
    isFocus: false,
    isBlur: false,
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
    isBlur: false,
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
    isBlur: false,
    value: '',
    errorMessage: ''
  },
  {
    name: 'phoneNumber',
    isError: false,
    isFocus: false,
    isBlur: false,
    value: '',
    errorMessage: '',
    condition: {
      symbolMax: 10,
      valueSymbol: 'number'
    }
  },
  {
    name: 'password',
    isError: false,
    isFocus: false,
    isBlur: false,
    value: '',
    errorMessage: '',
    condition: {
      numberMin: 1,
      BigletterMin: 1
    }
  }
];

const FormPage = () => {
  const [state, setState] = useState(StateDefolt);
  const HandleSubmit = (event: { preventDefault: () => void; currentTarget: any }) => {
    event?.preventDefault();

    return undefined;
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
        <Form onSubmit={HandleSubmit}>
          {fillingForm.map((elem) => (
            <FormInput key={elem.label} label={elem.label} name={elem.name} type={elem.type} />
          ))}
          <ButtonWrapper>
            <Button type='submit' />
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </FormContext.Provider>
  );
};

// onSubmit={handleSubmit()}

export { FormPage, FormContext };
