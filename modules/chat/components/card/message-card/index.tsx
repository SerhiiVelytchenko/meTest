import React, { useEffect, useRef, useState } from 'react';
// components
import Modal from 'react-modal';
import { MessageCardPropsType } from '@md-modules/shared/types/chat';
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

Modal.setAppElement('#__next');

const customStyles = {
  content: {
    height: '75vh',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -45%)'
  }
};

export const MessageCard = ({ id, message, messageImg, firstId, stateUserChat }: MessageCardPropsType) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [indexActiveImage, setIndexActiveImage] = useState(0);

  const urlImgActiveUser = stateUserChat.find((item) => item.id === id)?.urlImg;

  const justifyContent = id === firstId ? 'flex-end' : 'flex-start';

  const messagesEndRef = useRef<HTMLHeadingElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message, messageImg]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const messageImgContainer = messageImg.map((el: string, index: number) => (
    <WrapperImg key={index}>
      <WrapperImgInner
        onClick={() => {
          openModal();
          setIndexActiveImage(index);
        }}
      >
        <Img src={el} />
      </WrapperImgInner>
    </WrapperImg>
  ));

  return (
    <WrapperMessageCard justifyContent={justifyContent}>
      <MessageCardContainer>
        <WrapperTopContent>
          <UserAvatar url={urlImgActiveUser} />
          <TextMessage>{message}</TextMessage>
        </WrapperTopContent>
        <WrapperMessageImg>{messageImg.length > 0 ? messageImgContainer : ''}</WrapperMessageImg>
        <Ref ref={messagesEndRef} />
      </MessageCardContainer>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <SliderContainer messageImg={messageImg} indexActiveImage={indexActiveImage} />
      </Modal>
    </WrapperMessageCard>
  );
};
