export interface StateFormType {
  label: string;
  type: string;
  name: string;
  isError?: boolean;
  isFocus?: boolean;
  value: string;
  errorMessage?: string;
  condition?: any
}

export interface HandleStateFormType {
  isError?: boolean;
  value?: string;
  errorMessage?: string;
  condition?: {
    numberMinOne?: boolean;
    bigletterMinOne?: boolean;
  };
}

export interface Context {
  stateForm: StateFormType[];
  handleStateForm: (currentIndex: number, currentItem: StateFormType, data: HandleStateFormType) => void;
}
