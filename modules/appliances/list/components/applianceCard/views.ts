import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  height: 400px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray500};
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 0;
  white-space: nowrap;
  > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Currency = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  font-size: 19px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
`;

export const ViewButton = styled.button<{ count?: number }>`
  text-transform: capitalize;
  padding: 5px 10px;
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

export const WrapperCount = styled.div<{ count: any }>`
position: static;
margin: 0px 0px -30px -20px;
bottom: -15px;
font-weight: bold;
line-height: 1.28;
font-size: 15px;
text-align: center;
color: ${({ theme }) => theme.colors.white};
border-radius: 10px;
width: 20px;
height: 20px;
background-color: ${({count, theme}) => theme.colors.[count] ?? 0};
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;
