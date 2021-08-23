import styled from 'styled-components';
import { WrapperPage, Picture, Text, Button } from '@md-modules/landing/views';

export const WrapperBackgroundWhite = styled(WrapperPage)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperFooter = styled.div`
  display: flex;
  height: 100vh;
  background: url('/static/images/CultumHome/moon@3x.png') no-repeat;
  background-position: center bottom;
  background-size: 120vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const PictureFooter = styled(Picture)`
  position: absolute;
  background-image: url('/static/images/CultumHome/astronaut-flag@3x.png');
  background-size: 80%;
  width: 15%;
  height: 100%;
  top: -10%;
  left: 45%;
  z-index: 1;
  @media ${({ theme }) => theme.medias.phone} {
    width: 30%;
    top: -8%;
    left: 40%;
  }
`;

export const WrapperFooterInfo = styled.div`
  height: 30vh;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperTextFooterInfo = styled.div`
  width: 270px;
  height: 50px;
`;

export const TextTitleFooterInfo = styled(Text)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  text-align: center;
`;

export const ButtonFooter = styled(Button)`
  margin: 0;
`;

export const TextFooterInfo = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 10px;
`;
