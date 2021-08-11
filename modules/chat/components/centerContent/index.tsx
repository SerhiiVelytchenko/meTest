import { ChatContext } from '@md-modules/chat';
import React from 'react';
import { MessageCard } from '../card/messageCard';
import { WrapperCenterContent, Input, Content, Button } from './views';

export const CenterContent = () => {
  const { handleChange, handleSubmit, inputValue, correspondence } = React.useContext(ChatContext);

  return (
    <WrapperCenterContent>
      <Content>
        {correspondence
          .find((dialog) => dialog.isActive === true)
          ?.message.map((item, index) => {
            return <MessageCard key={index} id={item.id} message={item.message} />;
          })}
      </Content>
      <form onSubmit={handleSubmit}>
        <Input type={'text'} onChange={handleChange} value={inputValue} />
      </form>
      <Button>Da</Button>
    </WrapperCenterContent>
  );
};
