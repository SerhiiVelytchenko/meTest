import React, { useEffect, useRef } from 'react';
// components
import Modal from 'react-modal';
import { ChatContext } from '@md-modules/chat';
import { PropsMessageCardType } from '@md-modules/shared/types/chat';
import { SliderContainer } from '../../slider';
// views
import {
  WrapperMessageCard,
  MessageCardContainer,
  TextMessage,
  UserAvatar,
  WrapperImg,
  WrapperImgInner,
  Img,
  WrapperMessageImg,
  WrapperTopContent,
  Ref
} from './views';

export const MessageCard = ({ id, message, messageImg, firstId }: PropsMessageCardType) => {
  const { stateUser, handleClickImage, indexActiveImage } = React.useContext(ChatContext);
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

  const messagesEndRef = useRef<HTMLHeadingElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message, messageImg]);

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
                      handleClickImage(index);
                    }}
                  >
                    <Img src={el} />
                  </WrapperImgInner>
                </WrapperImg>
              ))
            : ''}
        </WrapperMessageImg>
        <Ref ref={messagesEndRef} />
      </MessageCardContainer>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <SliderContainer messageImg={messageImg} indexActiveImage={indexActiveImage} />
      </Modal>
    </WrapperMessageCard>
  );
};
