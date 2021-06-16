import styled from 'styled-components';

export const CardBlok = styled.div``;

export const CardFooterTitle = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.gray400};
  font-weight: bold;
  line-height: 1.28;
  font-size: 20px;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
  padding: 0px 15px 0px 10px;
`;

export const Modal = styled.div<{ opacity?: number; pointerEvents?: string }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  transition: 0.5s;
  opacity: ${(props) => props.opacity ?? 0};
  pointer-events: ${(props) => props.pointerEvents ?? 'none'};
`;

export const ModalContent = styled.div<{ transform?: string }>`
  margin: 50px;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transition: 0.4s all;
  width: 30vw;
  transform: ${(props) => props.transform ?? 'scale(0.5)'};
  max-height: 90%;
  overflow: auto;
`;
