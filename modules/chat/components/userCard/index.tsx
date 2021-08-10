import React from 'react';
import {
  UnreadMassage,
  ArrivalTimeMassage,
  InfoContainer,
  WrapperUsersListCard,
  UserAvatar,
  CenterContainer,
  TextUserName,
  TextUserMassage
} from './views';

export const UsersListCard = ({ name, urlImg }: { name: string; urlImg: string }) => {
  return (
    <WrapperUsersListCard onClick={() => {}}>
      <UserAvatar url={urlImg} />
      <CenterContainer>
        <TextUserName>{name}</TextUserName>
        <TextUserMassage>TextUserMassage</TextUserMassage>
      </CenterContainer>
      <InfoContainer>
        <ArrivalTimeMassage>11:20</ArrivalTimeMassage>
        <UnreadMassage>2</UnreadMassage>
      </InfoContainer>
    </WrapperUsersListCard>
  );
};
