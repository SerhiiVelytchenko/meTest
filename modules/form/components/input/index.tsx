import React, { useState } from 'react';
import { FormContext, FillingFormType } from '@md-modules/form';

import { Input } from './views';

const FormInput: React.FC<FillingFormType> = ({ label, name }) => {
  // Hooks
  const { setConditionsNumber, setConditionsLetter } = React.useContext(FormContext);
  const [value, setValue] = useState('');
  // Variable
  const type = label === 'Email' ? 'email' : label === 'Password' ? 'password' : 'text';

  const HandleChange = (event: { currentTarget: { value: string; name: string } }) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    const lastSymbol = value[value.length - 1];
    if (value.length > 50) return value;

    if (name === 'phoneNumber') {
      if (isNaN(+lastSymbol)) return value;
      if (value.length > 10) return value;
    }

    if (name === 'password' && value.length > 1) {
      return (
        !isNaN(+lastSymbol)
          ? setConditionsNumber(true)
          : lastSymbol === lastSymbol.toUpperCase()
            ? setConditionsLetter(true)
            : undefined,
        setValue(value)
      );
    }
    setValue(value);
  };

  return <Input type={type} name={name} placeholder={label} onChange={HandleChange} value={value} />;
};

export default FormInput;
