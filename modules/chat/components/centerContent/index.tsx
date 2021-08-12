import { ChatContext } from '@md-modules/chat';
import React from 'react';
import { MessageCard } from '../card/messageCard';
import { Dropzone } from '../dropzone';
import { WrapperCenterContent, Input, Content, Button, ButtonS } from './views';

export const CenterContent = () => {
  const { handleChange, handleSubmit, inputValue, correspondence, handleClickButtonReverse } = React.useContext(
    ChatContext
  );

  const isActiveCorrespondence = correspondence.find((dialog) => dialog.isActive === true);

  return (
    <Dropzone>
      <WrapperCenterContent>
        <Content>
          {isActiveCorrespondence?.message.map((item, index) => {
            return (
              <MessageCard
                key={index}
                id={item.id}
                message={item.message}
                firstId={isActiveCorrespondence.users.firstId}
              />
            );
          })}
        </Content>

        <form onSubmit={handleSubmit}>
          <Input type={'text'} onChange={handleChange} value={inputValue} />
        </form>
        <ButtonS></ButtonS>
        <Button
          onClick={() => {
            handleClickButtonReverse();
          }}
        >
          Da
        </Button>
      </WrapperCenterContent>
    </Dropzone>
  );
};
