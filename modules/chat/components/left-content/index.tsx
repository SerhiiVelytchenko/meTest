import React from 'react';
// type
import { LeftContentPropsType } from '@md-modules/shared/types/chat';
// components
import { UsersListCard } from '../card/users-list-card';
import { UsersChoiceCard } from '../card/users-choice-card';
// views
import { WrapperLeftContent, WrapperUsersChoice, ButtonReverse } from './views';

export const LeftContent = ({
  handleStateUser,
  handleCorrespondence,
  correspondence,
  stateUserChat,
  handleClickButtonReverse
}: LeftContentPropsType) => {
  return (
    <WrapperLeftContent>
      {correspondence.map((dialog) => {
        const currentItem = stateUserChat.find((el) => el.id === dialog.users.secondId);
        const urlImg = currentItem?.urlImg;
        const name = currentItem?.name;

        return (
          <UsersListCard
            name={name || ''}
            key={dialog.id}
            id={dialog.id}
            urlImg={urlImg || ''}
            isActive={dialog.isActive}
            message={dialog.message[dialog.message.length - 1].message}
            handleCorrespondence={handleCorrespondence}
          />
        );
      })}
      <WrapperUsersChoice>
        {stateUserChat.map((user) => (
          <UsersChoiceCard
            key={user.id}
            id={user.id}
            name={user.name}
            urlImg={user.urlImg}
            isActive={user.isActive}
            handleStateUser={handleStateUser}
          />
        ))}
        <ButtonReverse onClick={() => handleClickButtonReverse()}> change user </ButtonReverse>
      </WrapperUsersChoice>
    </WrapperLeftContent>
  );
};
