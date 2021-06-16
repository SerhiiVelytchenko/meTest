import React from 'react';
import { InfoName, InfoValue, InfoWrapper } from './views';

interface Props {
  label: string;
  value: React.ReactNode;
}

const PersonInfo: React.FC<Props> = ({ label, value }) => (
  <InfoWrapper>
    <InfoName>{label}:</InfoName>
    <InfoValue>{value}</InfoValue>
  </InfoWrapper>
);

export { PersonInfo };
