// import { ChatContext } from '@md-modules/chat';
import React, { useState } from 'react';
import { MessageCard } from '../messageCard';
import { WrapperRightContent, Input, Content } from './views';

export const RightContent = () => {
  const [inputValue, setInputValue] = useState('');
  // const [submitValue, setSubmitValue] = useState('');
  // const [correspondence, setCorrespondence] = useState();

  // const { stateChat, handleStateChat } = React.useContext(ChatContext);

  const def = {
    id: '1m',
    users: {
      firstId: '1u',
      secondId: '2u'
    },

    messages: [
      {
        id: '1u',
        message: 'Привет'
      },
      {
        id: '2u',
        message: 'Hello2'
      },
      {
        id: '1u',
        message: 'Как дела'
      },
      {
        id: '2u',
        message: 'Норм, сам как?'
      },
      {
        id: '1u',
        message: 'Ниче, норм'
      },
      {
        id: '2u',
        message: 'У меня тож норм'
      }
    ]
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event?.preventDefault();
    // const submitValue = event.currentTarget.children[0].value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
  };
  //  <UserAvatar url={urlImg} />

  return (
    <WrapperRightContent>
      <Content>
        {def.messages.map((item) => {
          return <MessageCard key={item.id} id={item.id} message={item.message} />;
        })}
      </Content>
      <form onSubmit={handleSubmit}>
        <Input type={'text'} onChange={handleChange} value={inputValue} />
      </form>
    </WrapperRightContent>
  );
};
