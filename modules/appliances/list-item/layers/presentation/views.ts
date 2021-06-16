import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
  min-width: ${({ theme }) => theme.dimensions.pageMinWidth}px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

export const PersonImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  img {
    max-width: 100%;
    max-height: 100%;
    flex-shrink: 0;
  }
`;

export const PersonDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 75px;
  border: 2px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 10px;
  @media (max-width: 570px) {
    margin-left: 0;
  }
`;

export const PersonName = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const PersonInfoContainer = styled.div``;

export const ViewButton = styled.button`
  margin: 5px 0px 5px 165px;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;
  width: 130px;
  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
  }
`;
