import { ChatContext } from '@md-modules/chat';
import React, { KeyboardEvent } from 'react';
import { MessageCard } from '../card/messageCard';
import { Dropzone } from '../dropzone';
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
          <Button onClick={() => handleClickButtonReverse()}> Da </Button>

          <Form onSubmit={handleSubmit}>
            <Textarea onChange={handleChange} value={inputValue} onKeyDown={handleKeydown} />
            {/* <ButtonS onClick={}></ButtonS> */}
            <InputSubmit type={'submit'} value={''}></InputSubmit>
          </Form>
        </ContentBottom>
      </WrapperCenterContent>
    </Dropzone>
  );
};
