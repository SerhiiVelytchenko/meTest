import { ChatContext } from '@md-modules/chat';
import React from 'react';
import Modal from 'react-modal';
import { SliderContainer } from '../../slider';

import {
  WrapperMessageCard,
  MessageCardContainer,
  TextMessage,
  UserAvatar,
  Thumb,
  ThumbInner,
  Img,
  WrapperMessageImg
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

  const urlUserAvatar = stateUser.find((item) => item.id === id)?.urlImg || '';
  const justifyContent = id === firstId ? 'flex-end' : 'flex-start';

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '700px',
      height: '700px'
    }
  };

  Modal.setAppElement('#__next');

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <WrapperMessageCard justifyContent={justifyContent}>
      <MessageCardContainer>
        <UserAvatar url={urlUserAvatar} />
        <TextMessage>{message}</TextMessage>
        <WrapperMessageImg>
          {messageImg.length > 0
            ? messageImg.map((el: string, index: number) => (
                <Thumb key={index}>
                  <ThumbInner onClick={openModal}>
                    <Img src={el} />
                  </ThumbInner>
                </Thumb>
              ))
            : ''}
        </WrapperMessageImg>
      </MessageCardContainer>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
        <button onClick={closeModal}>close</button>
        <SliderContainer messageImg={messageImg} />
      </Modal>
    </WrapperMessageCard>
  );
};
