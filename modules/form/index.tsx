import React, { useState, useMemo } from 'react';
// views
import { Wrapper, ButtonWrapper, Form, Button } from './views';
import FormInput from '@md-modules/form/components/input/index';
// import Button from './components/button';

export interface FillingFormType {
  label: string;
  name: string;
}

interface Context {
  setConditionsNumber: (conditionsNumber: boolean) => void;
  setConditionsLetter: (conditionsLetter: boolean) => void;
}

const FormContext = React.createContext<Context>({
  setConditionsNumber: () => {},
  setConditionsLetter: () => {}
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

const FormPage = () => {
  const [conditionsNumber, setConditionsNumber] = useState(false);
  const [conditionsLetter, setConditionsLetter] = useState(false);

  const HandleSubmit = (event: { preventDefault: () => void; currentTarget: any }) => {
    event?.preventDefault();
    const input = event.currentTarget;

    if (input[0].value.length < 5) {
      console.log(`error ${input[0].name}`);
    }

    if (input[1].value.length < 5) {
      console.log(`error ${input[1].name}`);
    }

    if ((conditionsNumber && conditionsLetter) === false) {
      console.log(`error ${input[4].name}`);
    }
    return undefined;
  };
  return (
    <FormContext.Provider
      value={useMemo(
        () => ({
          setConditionsNumber,
          setConditionsLetter
        }),
        []
      )}
    >
      <Wrapper>
        <Form onSubmit={HandleSubmit}>
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

// onSubmit={handleSubmit()}

export { FormPage, FormContext };
