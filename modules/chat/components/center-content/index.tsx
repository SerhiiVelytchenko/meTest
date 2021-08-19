import React, { KeyboardEvent } from 'react';
// components
import { ChatContext } from '@md-modules/chat';
import { MessageCard } from '../card/message-card';
import { Dropzone } from '../dropzone';
// views
import { WrapperCenterContent, Form, Textarea, InputSubmit, ContentCenter, Button, ContentBottom } from './views';

export const CenterContent = () => {
  const { handleChange, handleSubmit, inputValue, correspondence, handleClickButtonReverse } = React.useContext(
    ChatContext
  );

  const isActiveCorrespondence = correspondence.find((dialog) => dialog.isActive === true);

  const handleKeydown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

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
          <Button onClick={() => handleClickButtonReverse()}> change user </Button>

          <Form onSubmit={handleSubmit}>
            <Textarea onChange={handleChange} value={inputValue} onKeyDown={handleKeydown} />{' '}
            <InputSubmit type={'submit'} value={''}></InputSubmit>
          </Form>
        </ContentBottom>
      </WrapperCenterContent>
    </Dropzone>
  );
};
