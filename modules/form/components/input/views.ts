import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.gray300};
  
  color: ${({ theme }) => theme.colors.black};
  border-top: 2px solid ${({ theme }) => theme.colors.gray400};
  line-height: 1.28;
  font-size: 20px;
  margin: 10px;
  padding: 5px;
  box-sizing: border-box;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  };
  &:active {
    background-color: ${({ theme }) => theme.colors.gray600};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.blue400};
    background-color:red;
  }    
`;
