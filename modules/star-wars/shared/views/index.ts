import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  @media screen and (${({ theme }) => theme.medias.phone}) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
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

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 75px;
  @media screen and (${({ theme }) => theme.medias.tablet}) {
    margin-left: 0px;
  }
`;

export const Name = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const InfoContainer = styled.div``;
