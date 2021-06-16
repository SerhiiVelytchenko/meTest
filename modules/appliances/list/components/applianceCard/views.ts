import { colors } from '@md-modules/shared/styles/styled/theme';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  height: 300px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.gray300};
  background-color: ${({ theme }) => theme.colors.gray500};
  overflow: hidden;
  padding: 5px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 200px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 100px;
`;

export const Title = styled.h2`
  font-size: 19px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 0 0 5px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 5px;
  white-space: nowrap;
`;

export const Currency = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ViewButton = styled.button`
  text-transform: capitalize;
  padding: 3px 10px;
  width: 110px;
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

export const WrapperCount = styled.div<{ backgroundColorCount: keyof typeof colors }>`
  position: static;
  margin: -10px -102px 0px 0px;
  bottom: -15px;
  font-weight: bold;
  line-height: 1.28;
  font-size: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: ${({ backgroundColorCount, theme }) => theme.colors[backgroundColorCount] ?? 0};
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;
