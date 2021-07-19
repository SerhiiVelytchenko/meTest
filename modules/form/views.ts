import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
`;

export const Input = styled.input`
  margin: 5px 0px 5px 0px;
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
    background-color: ${({ theme }) => theme.colors.green200};
  }
`;
