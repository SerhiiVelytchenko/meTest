import * as React from 'react';
import styled from 'styled-components';
import { Loader } from '../loader';

interface Props {
  isLoading: boolean;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.templates.absolute};
  ${({ theme }) => theme.templates.centerContent};
`;

const ContentLoader: React.FC<Props> = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return <>{children}</>;
};

export { ContentLoader };
