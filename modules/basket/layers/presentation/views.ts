import styled from 'styled-components';

export const ViewButton = styled.button`
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid transparent;
  color: #fff;
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
  }
  @media (max-width: 500px) {
    margin: 0px 0px 0px -10px;
  }
  @media (max-width: 420px) {
    margin: 0px 0px 0px -20px;
  }
  @media (max-width: 340px) {
    width: 200px;
  }
`;

export const CardImg = styled.img`
  margin: 0;
  height: 30px;
  @media (max-width: 420px) {
    height: 20px;
  }
`;

export const ProductBasket = styled.div<{ item?: string }>`
  font-weight: bold;
  line-height: 1.28;
  font-size: 15px;
  color: black;
  border-radius: 10px;
  margin: -20px 0px 0px 40px;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.item ?? 0};
  @media (max-width: 340px) {
    margin: -20px 0px 0px 20px;
  }
`;
