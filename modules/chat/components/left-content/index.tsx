import React from 'react';
// components
import { UsersListCard } from '../card/users-list-card';
import { UsersChoiceCard } from '../card/users-choice-card';
import { ChatContext } from '@md-modules/chat';
// views
import { WrapperLeftContent, WrapperUsersChoice } from './views';

export const LeftContent = () => {
  const { correspondence, stateUser } = React.useContext(ChatContext);

  return (
    <WrapperLeftContent>
      {correspondence.map((dialog) => {
        const currentItem = stateUser.find((el) => el.id === dialog.users.secondId);
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
          />
        );
      })}
      <WrapperUsersChoice>
        {stateUser.map((user) => (
          <UsersChoiceCard key={user.id} id={user.id} name={user.name} urlImg={user.urlImg} isActive={user.isActive} />
        ))}
      </WrapperUsersChoice>
    </WrapperLeftContent>
  );
};
