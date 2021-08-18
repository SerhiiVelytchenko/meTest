import React from 'react';
// views
import {
  WrapperWelcomeContainer,
  WrapperButton,
  WrapperContainer,
  TextTitleWelcomeContainer,
  TextWelcomeContainer,
  ButtonWelcomeContainer,
  WrapperLabel,
  LabelCompany,
  LabelMenu
} from '../../views';

export const WelcomeContainer = () => {
  const textTitle = 'Digital experiences that make you shine';
  const text = 'Cultum is a digital agency where strategy, creativity and technology converge';
  const textButton = 'DROP US A LINE';

  return React.useMemo(
    () => (
      <WrapperWelcomeContainer>
        <WrapperLabel>
          <LabelCompany />
          <LabelMenu />
        </WrapperLabel>
        <WrapperContainer>
          <TextTitleWelcomeContainer>{textTitle}</TextTitleWelcomeContainer>
          <TextWelcomeContainer>{text}</TextWelcomeContainer>
          <WrapperButton>
            <ButtonWelcomeContainer>{textButton}</ButtonWelcomeContainer>
          </WrapperButton>
        </WrapperContainer>
      </WrapperWelcomeContainer>
    ),
    []
  );
};
