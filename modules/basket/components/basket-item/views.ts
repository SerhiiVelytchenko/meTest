import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.gray300};
  margin: 0px 0px 5px 0px;
  overflow: hidden;
`;

export const WrapperImg = styled.div`
height: 100px;
min-width: 170px;
`;

export const WrapperInfoBlock = styled.div`
display:flex;
flex-direction: column;
justify-content: space-around;
width: 200px;
`;

export const WrapperPriceAndButton = styled.div`
display:flex;
flex-direction: column;
justify-content: space-around;
margin: 0px 5px 0px 0px;
width: 100px;
`;

export const CardImg = styled.img`
padding: 5px 5px 5px 10px;
height:100px;
`;

export const CardName = styled.div`
`;

export const CardCounter = styled.div`
`;

export const CardFooter = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
`;

export const CardFooterBlok = styled.div`
display: flex;
justify-content: space-around;
width: 350px;
`;

export const CardPrice = styled.div`
  line-height: 1.28;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  text-align: center;
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
`;

export const CardFooterItem = styled.div`
  line-height: 1.28;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  text-align: center;
`;
