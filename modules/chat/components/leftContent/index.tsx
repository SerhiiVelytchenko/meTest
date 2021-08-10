import { StateChatType } from '@md-modules/shared/types/chat';
import React from 'react';
import { UsersListCard } from '../userCard';
import { UsersChoice } from '../usersChoice';
import { WrapperLeftContent, WrapperUsersChoice } from './views';

export const LeftContent = ({ stateChat }: { stateChat: StateChatType[] }) => {
  return (
    <WrapperLeftContent>
      {stateChat.map((user) => (
        <UsersListCard key={user.id} name={user.name} urlImg={user.urlImg} />
      ))}
      <WrapperUsersChoice>
        {stateChat.map((user) => (
          <UsersChoice key={user.id} id={user.id} name={user.name} urlImg={user.urlImg} isActive={user.isActive} />
        ))}
      </WrapperUsersChoice>
    </WrapperLeftContent>
  );
};
