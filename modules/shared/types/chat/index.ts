import React from 'react';
export interface StateChatType {
  id: string;
  name: string;
  urlImg: string;
  isActive: boolean;
}

export interface ContextChat {
  stateUser: StateChatType[];
  inputValue: string;
  correspondence: CorrespondenceType[];
  handleStateUser: (id: string) => void;
  handleCorrespondence: (id: string) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
}

export interface CorrespondenceType {
  id: string;
  isActive: boolean;
  users: {
    firstId: string;
    secondId: string;
  };
  message: {
    id: string;
    message: string;
  }[];
}
