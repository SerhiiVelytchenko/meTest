import { ChatContext } from '@md-modules/chat';
import React from 'react';
import { MessageCard } from '../card/messageCard';
import { Dropzone } from '../dropzone';
import { WrapperCenterContent, Input, ContentCenter, Button, ContentBottom } from './views';

export const CenterContent = () => {
  const { handleChange, handleSubmit, inputValue, correspondence, handleClickButtonReverse } = React.useContext(
    ChatContext
  );

  const isActiveCorrespondence = correspondence.find((dialog) => dialog.isActive === true);

  return (
    <Dropzone>
      <WrapperCenterContent>
        <ContentCenter>
          {isActiveCorrespondence?.message.map((item, index) => {
            return (
              <MessageCard
                key={index}
                id={item.id}
                message={item.message}
                messageImg={item.messageImg}
                firstId={isActiveCorrespondence.users.firstId}
              />
            );
          })}
        </ContentCenter>

        <ContentBottom>
          <Button onClick={() => handleClickButtonReverse()}> Da </Button>

          <form onSubmit={handleSubmit}>
            <Input type={'text'} onChange={handleChange} value={inputValue} />
          </form>
        </ContentBottom>
      </WrapperCenterContent>
    </Dropzone>
  );
};
