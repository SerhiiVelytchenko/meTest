import React, { useState, useMemo } from 'react';
// views
import { Wrapper, ButtonWrapper, Form, Button } from './views';
import FormInput from '@md-modules/form/components/input/index';

export interface FillingFormType {
  label: string;
  name: string;
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

export const StateDefolt = [
  {
    name: 'firstName',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: 'the firstName is entered incorrectly or includes too few characters',
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
    errorMessage: 'the lastName is entered incorrectly or includes too few characters',
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
    errorMessage: 'the email is entered incorrectly or includes too few characters'
  },
  {
    name: 'phoneNumber',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: 'the phoneNumber is entered incorrectly or includes too few characters',
    condition: {
      symbolMax: 10
    }
  },
  {
    name: 'password',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: 'the password is entered incorrectly or includes too few characters',
    condition: {
      numberMinOne: false,
      bigletterMinOne: false
    }
  }
];

const FormPage = () => {
  const [state, setState] = useState(StateDefolt);

  const handleSubmit = (event: any) => {
    event?.preventDefault();

    // const isErrorInput = state.map((item) => item.isError);
    // const isErrorInput = state.filter((item) => item.value.length === 0);
    const q = [...state];

    // setState([...isErrorInput]);

    

    q.forEach((item, index) => {
      if (item.value.length === 0) {
        return setState(
          state
            .slice(0, index)
            .concat({ ...item, isError: true })
            .concat(state.slice(index + 1))
        );
      }
    });
    setState(q);

    // const data = {
    //   firstName: firstName.value,
    //   lastName: lastName.value,
    //   email: email.value,
    //   phoneNumber: phoneNumber.value,
    //   password: password.value
    // };
    return console.log(q);
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
          <ButtonWrapper>
            <Button type='submit' />
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </FormContext.Provider>
  );
};

export { FormPage, FormContext };
