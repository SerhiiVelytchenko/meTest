import { StateFormType, HandleStateFormType } from '@md-form/components/type';

export const ValidationChange = (
  value: string,
  name: string,
  currentItem: StateFormType,
  currentIndex: number,
  handleStateForm: (currentIndex: number, currentItem: StateFormType, data: HandleStateFormType) => void
) => {
  const isNumberInPhoneNumber = !(value.split('').filter((el: string) => isNaN(+el)).length >= 1);
  const isNumber = value.split('').filter((el: string) => !isNaN(+el)).length >= 1;
  const isLetter = value.split('').filter((el: string) => isNaN(+el) && el.toUpperCase() === el).length >= 1;

  switch (name) {
    case 'firstName':
      value.length > currentItem?.condition.symbolMax
        ? handleStateForm(currentIndex, currentItem, {
          isError: true,
          errorMessage: 'the firstName has too many symbol'
        })
        : handleStateForm(currentIndex, currentItem, { value: value, isError: false });
      break;
    case 'lastName':
      value.length > currentItem?.condition.symbolMax
        ? handleStateForm(currentIndex, currentItem, {
          isError: true,
          errorMessage: 'the lastName has too many symbol'
        })
        : handleStateForm(currentIndex, currentItem, { value: value, isError: false });
      break;
    case 'email':
      handleStateForm(currentIndex, currentItem, { value: value });
      break;
    case 'phoneNumber':
      value.length > currentItem?.condition.symbolMax
        ? handleStateForm(currentIndex, currentItem, {
          isError: true,
          errorMessage: 'the phoneNumber has too many symbol'
        })
        : value.length >= 1 && !isNumberInPhoneNumber
          ? handleStateForm(currentIndex, currentItem, {
            isError: true,
            errorMessage: 'the phoneNumber only accepts numbers'
          })
          : handleStateForm(currentIndex, currentItem, { isError: false, value: value });
      break;
    case 'password':
      value.length >= 1 && isLetter && isNumber
        ? handleStateForm(currentIndex, currentItem, {
          value: value,
          condition: { ...currentItem?.condition, bigletterMinOne: true, numberMinOne: true }
        })
        : !isLetter && isNumber
            ? handleStateForm(currentIndex, currentItem, {
              value: value,
              condition: { ...currentItem?.condition, bigletterMinOne: false, numberMinOne: true }
            })
            : isLetter && !isNumber
              ? handleStateForm(currentIndex, currentItem, {
                value: value,
                condition: { ...currentItem?.condition, bigletterMinOne: true, numberMinOne: false }
              })
              : !isLetter && !isNumber
                  ? handleStateForm(currentIndex, currentItem, {
                    value: value,
                    condition: { ...currentItem?.condition, bigletterMinOne: false, numberMinOne: false }
                  })
                  : handleStateForm(currentIndex, currentItem, { isError: false, value: value });
      break;
  }
};

export const ValidationBlur = (
  value: string,
  name: string,
  currentItem: StateFormType,
  currentIndex: number,
  handleStateForm: (currentIndex: number, currentItem: StateFormType, data: HandleStateFormType) => void
) => {
  const isMail = value.includes('@');

  const numberMinOne = currentItem?.condition?.numberMinOne;
  const bigletterMinOne = currentItem?.condition?.bigletterMinOne;
  const isError = numberMinOne && bigletterMinOne;

  switch (name) {
    case 'firstName':
      value.length < currentItem?.condition.symbolMin
        ? handleStateForm(currentIndex, currentItem, {
          isError: true,
          errorMessage: 'the firstName has too few symbol'
        })
        : handleStateForm(currentIndex, currentItem, { isError: false });
      break;
    case 'lastName':
      value.length < currentItem?.condition.symbolMin
        ? handleStateForm(currentIndex, currentItem, {
          isError: true,
          errorMessage: 'the firstName has too few symbol'
        })
        : handleStateForm(currentIndex, currentItem, { isError: false });
      break;
    case 'email':
      !isMail
        ? handleStateForm(currentIndex, currentItem, { isError: true, errorMessage: 'enter emai' })
        : isMail
          ? handleStateForm(currentIndex, currentItem, { isError: false })
          : value.length < 1
            ? handleStateForm(currentIndex, currentItem, { isError: true, errorMessage: 'the email has too few symbol' })
            : handleStateForm(currentIndex, currentItem, {});
      break;
    case 'phoneNumber':
      value.length < 1
        ? handleStateForm(currentIndex, currentItem, {
          isError: true,
          errorMessage: 'the phoneNumber has too few symbol'
        })
        : value.length > currentItem?.condition.symbolMax - 1
          ? handleStateForm(currentIndex, currentItem, { errorMessage: 'the phoneNumber has too many symbol' })
          : handleStateForm(currentIndex, currentItem, {});
      break;
    case 'password':
      value.length === 0
        ? handleStateForm(currentIndex, currentItem, {
          isError: true,
          errorMessage: 'enter the correct password, at least one number and one capital letter'
        })
        : !isError
            ? handleStateForm(currentIndex, currentItem, {
              isError: true,
              errorMessage: 'enter the correct password, at least one number and one capital letter'
            })
            : handleStateForm(currentIndex, currentItem, { isError: false });
      break;
  }
};
