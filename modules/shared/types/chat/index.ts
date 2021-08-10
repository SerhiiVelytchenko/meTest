export interface StateChatType {
  id?: string;
  name?: string;
  urlImg?: string;
  isActive?: boolean;
}

export interface ContextChat {
  stateChat: StateChatType[];
  handleStateChat: (submitValue: string, id: string) => void;
}

export interface correspondenceType {
  id: string;
  users: {
    firstId: string;
    secondId: string;
  };
  messages: [
    {
      message: [
        {
          id: string;
          message: string;
        }
      ];
    }
  ];
}
