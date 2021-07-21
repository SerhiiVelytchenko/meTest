import React, { useState, useMemo } from 'react';
// type
import { StateFormType, Context, HandleStateFormType } from '@md-form/components/type';
// views
import { Wrapper, InputWrapper, Form, Input } from './views';
import FormInput from '@md-modules/form/components/input/index';

export const FormContext = React.createContext<Context>({
  stateForm: [],
  handleStateForm: () => {}
});

// should be outside the component

const stateFormDefolt: StateFormType[] = [
  {
    label: 'First Name',
    type: 'text',
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
    label: 'Last Name',
    type: 'text',
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
    label: 'Email',
    type: 'text',
    name: 'email',
    isError: false,
    isFocus: false,
    value: '',
    errorMessage: ''
  },
  {
    label: 'PhoneNumber',
    type: 'text',
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
    label: 'Password',
    type: 'password',
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

export const FormPage = () => {
  const [stateForm, setStateForm] = useState(stateFormDefolt);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    // not necessary to use return, you can simplify the function

    setStateForm((stateForm) => {
      return stateForm.map((item) => {
        return item.value.length === 0 ? { ...item, isError: true, errorMessage: 'field must be filled' } : { ...item };
      });
    });

    console.log(stateForm.map((item) => `${item.name}: ${item.value}`));
  };

  const handleStateForm = (currentIndex: number, currentItem: StateFormType, data: HandleStateFormType) => {
    return setStateForm(
      stateForm
        .slice(0, currentIndex)
        .concat({ ...currentItem, ...data })
        .concat(stateForm.slice(currentIndex + 1))
    );
  };

  // handle change should be handled here and value validated
  // context not needed in this case

  return (
    <FormContext.Provider
      value={useMemo(
        () => ({
          stateForm,
          handleStateForm
        }),
        [stateForm]
      )}
    >
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          {stateForm.map((elem) => (
            <FormInput key={elem.label} label={elem.label} name={elem.name} type={elem.type} value={elem.value} />
          ))}
          <InputWrapper>
            <Input type='submit' />
          </InputWrapper>
        </Form>
      </Wrapper>
    </FormContext.Provider>
  );
};
