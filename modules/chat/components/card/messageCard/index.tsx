import { ChatContext } from '@md-modules/chat';
import React from 'react';
import {
  WrapperMessageCard,
  MessageCardContainer,
  TextMessage,
  UserAvatar,
  Thumb,
  ThumbInner,
  Img,
  ThumbsContainer
} from './views';

export const MessageCard = ({ id, message, firstId }: { id: string; message: string; firstId: string }) => {
  const { stateUser, correspondence } = React.useContext(ChatContext);

  const urlUserAvatar = stateUser.find((item) => item.id === id)?.urlImg || '';
  const justifyContent = id === firstId ? 'flex-end' : 'flex-start';
  const isActiveCorrespondence = correspondence.find((dialog) => dialog.isActive === true);
  const lastMessage = isActiveCorrespondence?.message[isActiveCorrespondence?.message.length - 1];

  return (
    <WrapperMessageCard justifyContent={justifyContent}>
      <MessageCardContainer>
        <UserAvatar url={urlUserAvatar} />
        <TextMessage>{message}</TextMessage>
        {lastMessage?.messageImg || 0 > 1 ? (
          <ThumbsContainer>
            {lastMessage?.messageImg.map((el: string, index: number) => (
              <Thumb key={index}>
                <ThumbInner>
                  <Img src={el} />
                </ThumbInner>
              </Thumb>
            ))}
          </ThumbsContainer>
        ) : (
          ''
        )}
      </MessageCardContainer>
    </WrapperMessageCard>
  );
};
