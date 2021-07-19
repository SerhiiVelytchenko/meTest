import { StateDefoltType } from '@md-form/index';

const stateDefolt = {
  name: 'firstName',
  isError: false,
  isFocus: false,
  value: '',
  errorMessage: '',
  condition: {
    symbolMin: 5,
    symbolMax: 50
  }
};

// reuse import and export types
// event type should be correct

export const ValidChange = (
  event: { currentTarget: { value: string; name: string } },
  state: StateDefoltType[],
  setState: {
    (state: StateDefoltType[]): void;
    (arg0: {
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
    }): void;
  }
) => {
  // should be separation for each type of validation
  const value = event.currentTarget.value;
  const name = event.currentTarget.name;
  const currentItem = state.find((el: { name: string }) => el.name === name) || stateDefolt;
  const currentIndex = state.indexOf(currentItem);

  const arrValue = value.split('').filter((el: string) => isNaN(+el));
  const isNumberInPhoneNumber = !(arrValue.length >= 1);

  // should be find
  const isNumberArr: string[] = [];
  value.split('').forEach((el: string) => {
    if (!isNaN(+el)) {
      return isNumberArr.push(el);
    }
  });
  const isNumber = isNumberArr.length >= 1;

  // should be find
  const isBigLetterArr: string[] = [];
  value.split('').forEach((el: string) => {
    if (isNaN(+el) && el.toUpperCase() === el) {
      return isBigLetterArr.push(el);
    }
  });
  const isLetter = isBigLetterArr.length >= 1;

  switch (name) {
    case 'firstName':
      setState((state: StateDefoltType[]) => {
        if (value.length > currentItem?.condition.symbolMax) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true })
            .concat(state.slice(currentIndex + 1));
        }
        return state
          .slice(0, currentIndex)
          .concat({ ...currentItem, value: value })
          .concat(state.slice(currentIndex + 1));
      });
      break;
    case 'lastName':
      setState((state: StateDefoltType[]) => {
        if (value.length > currentItem?.condition.symbolMax) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem })
            .concat(state.slice(currentIndex + 1));
        }
        return state
          .slice(0, currentIndex)
          .concat({ ...currentItem, value: value })
          .concat(state.slice(currentIndex + 1));
      });
      break;
    case 'email':
      setState((state: StateDefoltType[]) => {
        return state
          .slice(0, currentIndex)
          .concat({ ...currentItem, value: value })
          .concat(state.slice(currentIndex + 1));
      });
      break;
    case 'phoneNumber':
      setState((state: StateDefoltType[]) => {
        if (value.length > currentItem?.condition.symbolMax) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the phoneNumber has too many symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        if (value.length >= 1 && !isNumberInPhoneNumber) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the phoneNumber only accepts numbers' })
            .concat(state.slice(currentIndex + 1));
        }
        return state
          .slice(0, currentIndex)
          .concat({ ...currentItem, isError: false, value: value })
          .concat(state.slice(currentIndex + 1));
      });
      break;
    case 'password':
      setState((state: StateDefoltType[]) => {
        if (value.length >= 1 && isLetter && isNumber) {
          // code duplicate
          // use reduce
          return state
            .slice(0, currentIndex)
            .concat({
              ...currentItem,
              value: value,
              condition: { ...currentItem?.condition, bigletterMinOne: true, numberMinOne: true }
            })
            .concat(state.slice(currentIndex + 1));
        }

        if (!isLetter && isNumber) {
          return state
            .slice(0, currentIndex)
            .concat({
              ...currentItem,
              value: value,
              condition: { ...currentItem?.condition, bigletterMinOne: false, numberMinOne: true }
            })
            .concat(state.slice(currentIndex + 1));
        }
        if (isLetter && !isNumber) {
          return state
            .slice(0, currentIndex)
            .concat({
              ...currentItem,
              value: value,
              condition: { ...currentItem?.condition, bigletterMinOne: true, numberMinOne: false }
            })
            .concat(state.slice(currentIndex + 1));
        }
        if (!isLetter && !isNumber) {
          return state
            .slice(0, currentIndex)
            .concat({
              ...currentItem,
              value: value,
              condition: { ...currentItem?.condition, bigletterMinOne: false, numberMinOne: false }
            })
            .concat(state.slice(currentIndex + 1));
        }
        return state
          .slice(0, currentIndex)
          .concat({ ...currentItem, value: value })
          .concat(state.slice(currentIndex + 1));
      });
      break;
  }
};

export const ValidBlur = (
  event: { currentTarget: { value: string; name: string } },
  state: StateDefoltType[],
  setState: {
    (state: StateDefoltType[]): void;
    (arg0: {
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
      (state: StateDefoltType[]): StateDefoltType[];
    }): void;
  }
) => {
  const value = event.currentTarget.value;
  const name = event.currentTarget.name;
  const isMail = value.includes('@');
  const currentItem = state.find((el: { name: string }) => el.name === name) || stateDefolt;
  const currentIndex = state.indexOf(currentItem);
  const numberMinOne = currentItem?.condition?.numberMinOne;
  const bigletterMinOne = currentItem?.condition?.bigletterMinOne;

  switch (name) {
    case 'firstName':
      setState((state: StateDefoltType[]) => {
        if (value.length > currentItem?.condition.symbolMax - 1) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the firstName has too many symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        if (value.length < currentItem?.condition.symbolMin) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the firstName has too few symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        if (value.length > currentItem?.condition.symbolMin) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: false })
            .concat(state.slice(currentIndex + 1));
        }
        return state;
      });
      break;
    case 'lastName':
      setState((state: StateDefoltType[]) => {
        if (value.length > currentItem?.condition.symbolMax - 1) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the lastName has too many symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        if (value.length < currentItem?.condition.symbolMin) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the lastName has too few symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        if (value.length > currentItem?.condition.symbolMin) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: false })
            .concat(state.slice(currentIndex + 1));
        }
        return state;
      });
      break;
    case 'email':
      setState((state: StateDefoltType[]) => {
        if (!isMail) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'enter emai' })
            .concat(state.slice(currentIndex + 1));
        }
        if (isMail) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: false })
            .concat(state.slice(currentIndex + 1));
        }
        if (value.length < 1) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the email has too few symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        return state;
      });
      break;
    case 'phoneNumber':
      setState((state: StateDefoltType[]) => {
        if (value.length < 1) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, isError: true, errorMessage: 'the phoneNumber has too few symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        if (value.length > currentItem?.condition.symbolMax - 1) {
          return state
            .slice(0, currentIndex)
            .concat({ ...currentItem, errorMessage: 'the phoneNumber has too many symbol' })
            .concat(state.slice(currentIndex + 1));
        }
        return state;
      });
      break;
    case 'password':
      setState((state: StateDefoltType[]) => {
        const isError = numberMinOne && bigletterMinOne;

        if (value.length === 0) {
          return state
            .slice(0, currentIndex)
            .concat({
              ...currentItem,
              isError: true,
              errorMessage: 'enter the correct password, at least one number and one capital letter'
            })
            .concat(state.slice(currentIndex + 1));
        }
        if (!isError) {
          return state
            .slice(0, currentIndex)
            .concat({
              ...currentItem,
              isError: true,
              errorMessage: 'enter the correct password, at least one number and one capital letter'
            })
            .concat(state.slice(currentIndex + 1));
        }
        return state
          .slice(0, currentIndex)
          .concat({ ...currentItem, isError: false })
          .concat(state.slice(currentIndex + 1));
      });
      break;
  }
};
