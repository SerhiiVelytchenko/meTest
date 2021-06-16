import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.gray300};
  margin: 0px 0px 5px 0px;
  overflow: hidden;
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  max-width: 100px;
  min-width: 70px;
`;

export const CardImg = styled.img`
  padding: 5px 0px 5px 5px;
  max-width: 100%;
  max-height: 100%;
  flex-shrink: 0;
`;

export const CardName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  line-height: 1.28;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px 5px 0px 0px;
  padding: 0px 5px 0px 0px;
  text-align: center;
  overflow: hidden;
  @media (max-width: 1070px) {
    font-size: 10px;
    width: 300px;
  }
  @media (max-width: 670px) {
    font-size: 8px;
    width: 400px;
  }
`;

export const WrapperInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0px 5px 0px 0px;
  width: 100px;
`;

export const CardPrice = styled.div`
  line-height: 1.28;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
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
    font-size: 10px;
  }
`;

export const CardCounter = styled.div`
  margin: 5px 0px;
`;
