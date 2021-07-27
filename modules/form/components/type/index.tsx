import React from 'react';
export interface StateFormType {
  label?: string;
  type?: string;
  name?: string;
  isError?: boolean;
  isFocus?: boolean;
  value?: string;
  errorMessage?: string;
  condition?: any;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface HandleStateFormType extends StateFormType {
  isError?: boolean;
  value?: string;
  errorMessage?: string;
  condition?: {
    numberMinOne?: boolean;
    bigletterMinOne?: boolean;
  };
}
