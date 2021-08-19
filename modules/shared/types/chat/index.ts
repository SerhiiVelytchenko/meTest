import React from 'react';
export interface StateChatType {
  id: string;
  name: string;
  urlImg: string;
  isActive: boolean;
}

export interface ContextChat {
  filesDropzone: [];
  stateUser: StateChatType[];
  inputValue: string;
  correspondence: CorrespondenceType[];
  handleStateUser: (id: string) => void;
  handleCorrespondence: (id: string) => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  handleClickButtonReverse: () => void;
  handleFilesDropzone: <T extends File>(acceptedFiles: T[]) => void;
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
    messageImg: string[];
  }[];
}

export interface PropsMessageCardType {
  id: string;
  message: string;
  messageImg: string[];
  firstId: string;
}

export interface PropsUsersChoiceCardType {
  id: string;
  name: string;
  urlImg: string;
  isActive: boolean;
}

export interface PropsUsersListCardType {
  name: string;
  urlImg: string;
  id: string;
  isActive: boolean;
  message: string;
}
