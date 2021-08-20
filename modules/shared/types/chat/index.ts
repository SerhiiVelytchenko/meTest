import { ReactChild, ReactChildren } from 'react';
export interface StateUserChatType {
  id: string;
  name: string;
  urlImg: string;
  isActive: boolean;
}

export interface CorrespondenceType {
  id: string;
  isActive: boolean;
  users: {
    firstId?: string;
    secondId?: string;
  };
  message: {
    id: string;
    message: string;
    messageImg: string[];
  }[];
}

export interface HandleSubmitType {
  (event: { preventDefault: () => void }, inputValue: string, filesDropzone: { preview: string }[]): void;
}

export interface MessageCardPropsType {
  id: string;
  message: string;
  messageImg: string[];
  firstId?: string;
  stateUserChat: StateUserChatType[];
}
export interface LeftContentPropsType {
  stateUserChat: StateUserChatType[];
  correspondence: CorrespondenceType[];
  handleStateUser: (id: string) => void;
  handleCorrespondence: (id: string) => void;
  handleClickButtonReverse: () => void;
}

export interface CenterContentPropsType {
  stateUserChat: StateUserChatType[];
  activeDialog?: CorrespondenceType;
  handleSubmit: (
    event: { preventDefault: () => void },
    inputValue: string,
    filesDropzone: { preview: string }[]
  ) => void;
}

export interface UsersListCardPropsType {
  name: string;
  urlImg: string;
  id: string;
  isActive: boolean;
  message: string;
  handleCorrespondence: (id: string) => void;
}
export interface UsersChoiceCardPropsType {
  id: string;
  name: string;
  urlImg: string;
  isActive: boolean;
  handleStateUser: (id: string) => void;
}

export interface DropzonePropsType {
  children: ReactChild | ReactChildren;
  filesDropzone: { preview: string }[];
  handleFilesDropzone: <T extends File>(acceptedFiles: T[]) => void;
  handleRemoveFile: (index: number) => void;
  isOpenWindowAddFiles: boolean;
}

export interface SliderContainerPropsType {
  messageImg: string[];
  indexActiveImage: number;
}
