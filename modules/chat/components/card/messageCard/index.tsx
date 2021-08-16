import { ChatContext } from '@md-modules/chat';
import React from 'react';
import Modal from 'react-modal';
import { SliderContainer } from '../../slider';

import {
  WrapperMessageCard,
  MessageCardContainer,
  TextMessage,
  UserAvatar,
  WrapperImg,
  WrapperImgInner,
  Img,
  WrapperMessageImg,
  WrapperTopContent
} from './views';

export const MessageCard = ({
  id,
  message,
  messageImg,
  firstId
}: {
  id: string;
  message: string;
  messageImg: string[];
  firstId: string;
}) => {
  const { stateUser } = React.useContext(ChatContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const urlUserAvatar = stateUser.find((item) => item.id === id)?.urlImg || '';
  const justifyContent = id === firstId ? 'flex-end' : 'flex-start';

  const customStyles = {
    content: {
      height: '75vh',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -45%)'
    }
  };

  Modal.setAppElement('#__next');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <WrapperMessageCard justifyContent={justifyContent}>
      <MessageCardContainer>
        <WrapperTopContent>
          <UserAvatar url={urlUserAvatar} />
          <TextMessage>{message}</TextMessage>
        </WrapperTopContent>
        <WrapperMessageImg>
          {messageImg.length > 0
            ? messageImg.map((el: string, index: number) => (
                <WrapperImg key={index}>
                  <WrapperImgInner
                    onClick={() => {
                      openModal();
                    }}
                  >
                    <Img src={el} />
                  </WrapperImgInner>
                </WrapperImg>
              ))
            : ''}
        </WrapperMessageImg>
      </MessageCardContainer>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <SliderContainer messageImg={messageImg} />
      </Modal>
    </WrapperMessageCard>
  );
};
