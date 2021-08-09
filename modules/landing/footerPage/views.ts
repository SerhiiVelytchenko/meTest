import styled from 'styled-components';
import { WrapperPage, Picture, Text, Button } from '../views';

export const WrapperPageBackgroundWhite = styled(WrapperPage)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperFooterPageFlex = styled.div`
  display: flex;
  height: 100vh;
  background: url('/static/images/CultumHome/moon@3x.png') no-repeat;
  background-position: center bottom;
  background-size: 120vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const PictureFooterPage = styled(Picture)`
  position: absolute;
  background-image: url('/static/images/CultumHome/astronaut-flag@3x.png');
  background-size: 140px;
  width: 143px;
  height: 100vh;
  top: -10%;
  right: 0px;
  bottom: 0px;
  left: 47%;
  z-index: 2;
`;

export const WrapperFooterInfo = styled.div`
  height: 25vh;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperTextFooterInfo = styled.div`
  width: 300px;
  height: 50px;
`;

export const TextTitleFooterInfo = styled(Text)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.white};
  margin: 20px 0 0 0;
  text-align: center;
`;

export const ButtonFooterPage = styled(Button)`
  margin: 0;
`;

export const TextFooterInfo = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray300};
  margin: 0 0 -20px 0;
`;
