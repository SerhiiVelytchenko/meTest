import React, { useState } from 'react';
// type
import { HandleStateFormType } from '@md-form/components/type';
// components
import FormInput from '@md-form/components/input/index';
import { StateFormDefolt } from '@md-form/constants/index';
import { validationChange, validationBlur } from '@md-form/components/validation/index';
// views
import { Wrapper, InputWrapper, Form, InputButton } from './views';

export const FormPage = () => {
  const [stateForm, setStateForm] = useState(StateFormDefolt);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    setStateForm((stateForm) =>
      stateForm.map((item) =>
        item.value?.length === 0 ? { ...item, isError: true, errorMessage: 'field must be filled' } : { ...item }
      )
    );

    // eslint-disable-next-line no-console
    console.log(stateForm.map((item) => `${item.name}: ${item.value}`));
  };

  const handleStateForm = ([name, data]: [string, HandleStateFormType]) => {
    const currentItem = stateForm.find((item) => item.name === name);
    const currentIndex = stateForm.findIndex((item) => item.name === name);

    return setStateForm(
      stateForm
        .slice(0, currentIndex)
        .concat({ ...currentItem, ...data })
        .concat(stateForm.slice(currentIndex + 1))
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    handleStateForm(validationChange(value, name));
  };

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    handleStateForm([name, { isError: false }]);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    handleStateForm(validationBlur(value, name));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {stateForm.map((elem) => (
          <FormInput
            key={elem.label}
            label={elem.label}
            name={elem.name}
            type={elem.type}
            value={elem.value}
            isError={elem.isError}
            errorMessage={elem.errorMessage}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
        ))}
        <InputWrapper>
          <InputButton type='submit' />
        </InputWrapper>
      </Form>
    </Wrapper>
  );
};
