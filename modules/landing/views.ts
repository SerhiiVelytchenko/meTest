import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';
// import cultum from '/home/serko/myTest/test/test/cultum.png';
// import cultumOne from './test/test/cultum.png';

export const Wrapper = styled.div`
  background-image: url(/static/images/cultum.png);
  background-size: 1500px 7200px;
  /* background-color: ${({ theme }) => theme.colors.white}; */
  min-height: 100%;
`;

export const Parallax = styled.div`
  min-height: 100vh;
  background: url('https://cultum.io/static/images/cultum/cultum.svg') top / cover no-repeat;

  //background-image: url(/static/images/cultum.png);
`;

export const ParallaxBody = styled.div``;
export const ParalaxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 1000px;
  z-index: 2;
`;
export const ParalaxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ParalaxLabel = styled.div`
  position: absolute;
  width: 11%;
  height: 5%;
  margin: 0px;
  top: 14.1%;
  right: 0px;
  bottom: 0px;
  left: 7%;
  background: url(/static/images/CultumHome/logo@3x.png) top / cover no-repeat;
`;

export const ParalaxMenu = styled.div`
  position: absolute;
  width: 2.5%;
  height: 3%;
  margin: 0px;
  top: 16%;
  right: 0px;
  bottom: 0px;
  left: 95%;
  background: url(/static/images/CultumHome/menu@3x.png) top / cover no-repeat;
`;
export const ParalaxImagest = styled.div`
  /* position: absolute; */
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  z-index: 1;
`;

export const ParalaxImagestImg = styled.div`
  /* position: absolute; */
  /* width:100%;
height: 100%;
left: 0%; */
`;

export const ParalaxImagestLeftPlanet = styled.div<{ transform?: string }>`
  position: absolute;
  background: url('https://cultum.io/static/images/cultum/left-planet.svg') top / cover no-repeat;
  width: 45px;
  height: 45px;
  top: 30%;
  right: 0px;
  bottom: 0px;
  left: 55%;
  /* transform: translate(1.1563928280817641%, 0.7101500007332644%); */
  transform: ${(props) => props.transform};
  //translate(1.1563928280817641%, 0.7101500007332644%)
`;

export const ParalaxImagestRightPlanet = styled.div<{ transform?: string }>`
  position: absolute;
  background: url('https://cultum.io/static/images/cultum/right-planet.svg') top / cover no-repeat;
  width: 120px;
  height: 100px;
  top: 65%;
  right: 0px;
  bottom: 0px;
  left: 85%;
  z-index: 2;
  transform: ${(props) => props.transform ?? 'scale(0.5)'};
`;

export const ParalaxImagestCultum = styled.div<{ transform?: string }>`
  position: absolute;
  background: url('https://cultum.io/static/images/cultum/cultum.svg') top / cover no-repeat;
  width: 550px;
  height: 550px;
  top: 45%;
  right: 0px;
  bottom: 0px;
  left: 50%;
  z-index: 1;
  transform: ${(props) => props.transform ?? 'scale(0.5)'};
`;

export const TextTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
  /* width: 100px; */
  line-height: 1.68;
  margin: 0;
  padding: 0;
  /* background-color: red;
  display: flex;
  width: 1000px;
  color: ${({ theme }) => theme.colors.black};
  font-family: Assistant, sans-serif;
  font-weight: 600;
  line-height: 1.28;
  font-size: 80px;
  margin: 0; 
  padding: 0; */
  /* &:active {
    color: ${({ theme }) => theme.colors.blue400};
  } */
  /* @media (max-width: 570px) {
    font-size: 14px;
  } */
`;
export const Text = styled.h4`
  font-weight: 400;
  font-size: 16px;
  /* width: 100px; */
  line-height: 1.48;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;
  padding: 0;
  /* background-color: red;
  display: flex;
  width: 1000px;
  color: ${({ theme }) => theme.colors.black};
  font-family: Assistant, sans-serif;
  font-weight: 600;
  line-height: 1.28;
  font-size: 80px;
  margin: 0; 
  padding: 0; */
  /* &:active {
    color: ${({ theme }) => theme.colors.blue400};
  } */
  /* @media (max-width: 570px) {
    font-size: 14px;
  } */
`;

export const ParalaxTitle = styled.div`
  /* background-color: red;
  display: flex;
  width: 1000px;
  color: ${({ theme }) => theme.colors.black};
  font-family: Assistant, sans-serif;
  font-weight: 600;
  line-height: 1.28;
  font-size: 80px;
  margin: 0; 
  padding: 0; */
  /* &:active {
    color: ${({ theme }) => theme.colors.blue400};
  } */
  /* @media (max-width: 570px) {
    font-size: 14px;
  } */
`;

export const Button = styled.button`
  text-transform: capitalize;
  padding: 3px 10px;
  width: 310px;
  height: 110px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
  }
`;
export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.red200};
  position: relative;
  z-index: 2;
`;

export const ContentOne = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 50px 20p;
`;

export const ContentTwo = styled.h4`
  font-weight: 400;
  font-size: 25px;
  line-height: 1.48;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.red200};
`;
