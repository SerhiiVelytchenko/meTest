import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const ViewButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.green300};
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red200};
    color: ${({ theme }) => theme.colors.red300};
    border: 1px solid ${({ theme }) => theme.colors.red400};
  }
  @media (max-width: 1000px) {
    padding: 5px 5px;
    width: 30px;
  }
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.28;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  text-align: center;
  width: 30px;
  @media (max-width: 1000px) {
    font-size: 16px;
    width: 25px;
  }
  @media (max-width: 670px) {
    font-size: 14px;
    width: 20px;
  }
`;
