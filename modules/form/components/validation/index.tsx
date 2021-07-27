import { HandleStateFormType } from '../type';

const passwordСondition = {
  numberMinOne: false,
  bigletterMinOne: false
};

export const validationChange = (value: string, name: string): [string, HandleStateFormType] => {
  const isNumberInPhoneNumber = !(value.split('').filter((el: string) => isNaN(+el)).length >= 1);
  const isNumber = value.split('').filter((el: string) => !isNaN(+el)).length >= 1;
  const isLetter = value.split('').filter((el: string) => isNaN(+el) && el.toUpperCase() === el).length >= 1;

  switch (name) {
    case 'firstName':
      if (value.length > 50) return [name, { isError: true, errorMessage: 'the firstName has too many symbol' }];
      else return [name, { value: value, isError: false }];

    case 'lastName':
      if (value.length > 50) return [name, { isError: true, errorMessage: 'the lastName has too many symbol' }];
      else return [name, { value: value, isError: false }];

    case 'email':
      return [name, { value: value }];

    case 'phoneNumber':
      if (value.length > 10) return [name, { isError: true, errorMessage: 'the phoneNumber has too many symbol' }];
      else if (value.length >= 1 && !isNumberInPhoneNumber) {
        return [name, { isError: true, errorMessage: 'the phoneNumber only accepts numbers' }];
      } else return [name, { isError: false, value: value }];

    case 'password':
      if (value.length >= 1 && isLetter && isNumber) {
        passwordСondition.numberMinOne = true;
        passwordСondition.bigletterMinOne = true;
        return [name, { value: value, condition: { bigletterMinOne: true, numberMinOne: true } }];
      } else if (!isLetter && isNumber) {
        passwordСondition.numberMinOne = true;
        passwordСondition.bigletterMinOne = false;
        return [name, { value: value, condition: { bigletterMinOne: false, numberMinOne: true } }];
      } else if (isLetter && !isNumber) {
        passwordСondition.numberMinOne = false;
        passwordСondition.bigletterMinOne = true;
        return [name, { value: value, condition: { bigletterMinOne: true, numberMinOne: false } }];
      } else if (!isLetter && !isNumber) {
        passwordСondition.numberMinOne = false;
        passwordСondition.bigletterMinOne = false;
        return [name, { value: value, condition: { bigletterMinOne: false, numberMinOne: false } }];
      } else return [name, { isError: false, value: value }];
  }
  return [name, { value: value }];
};

export const validationBlur = (value: string, name: string): [string, HandleStateFormType] => {
  const isMail = value.includes('@');

  switch (name) {
    case 'firstName':
      if (value.length < 5) return [name, { isError: true, errorMessage: 'the firstName has too few symbol' }];
      else return [name, { isError: false }];

    case 'lastName':
      if (value.length < 5) return [name, { isError: true, errorMessage: 'the lastName has too few symbol' }];
      else return [name, { isError: false }];

    case 'email':
      if (!isMail) return [name, { isError: true, errorMessage: 'enter emai' }];
      else if (isMail) return [name, { isError: false }];
      else if (value.length < 1) return [name, { isError: true, errorMessage: 'the email has too few symbol' }];
      else return [name, {}];

    case 'phoneNumber':
      if (value.length < 1) return [name, { isError: true, errorMessage: 'the phoneNumber has too few symbol' }];
      else if (value.length > 9) return [name, { errorMessage: 'the phoneNumber has too many symbol' }];
      else return [name, {}];

    case 'password':
      if (value.length === 0) {
        return [
          name,
          { isError: true, errorMessage: 'enter the correct password, at least one number and one capital letter' }
        ];
      } else if (!(passwordСondition.bigletterMinOne && passwordСondition.numberMinOne)) {
        return [
          name,
          { isError: true, errorMessage: 'enter the correct password, at least one number and one capital letter' }
        ];
      } else return [name, { isError: false }];
  }
  return [name, { value: value }];
};
