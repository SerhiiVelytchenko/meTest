import styled from 'styled-components';
import { colors } from '@md-modules/shared/styles/styled/theme';

export const Input = styled.input<{ border: keyof typeof colors}>`
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.black};
  border-top: 2px solid ${({ theme }) => theme.colors.gray400};
  line-height: 1.28;
  font-size: 20px;
  margin: 0px 0px 0px 10px;
  padding: 5px;
  box-sizing: border-box;
  border-color: ${({ border, theme }) => theme.colors[border] ?? 0};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:active {
    color: ${({ theme }) => theme.colors.blue400};
  }
`;

export const TextError = styled.div`
  color: ${({ theme }) => theme.colors.red300};
  height: 25px;
  line-height: 1.28;
  font-size: 12px;
  margin: 0px 0px 10px 10px;
  padding: 0px;
  box-sizing: border-box;
  &:active {
    color: ${({ theme }) => theme.colors.blue400};
  }
`;
