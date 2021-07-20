import * as React from 'react';
import styled from 'styled-components';
import { Loader } from '../loader';
import { ErrorWrapper } from 'modules/shared/components/ui/content/index';
import { ClientError } from '@md-utils/errors/custom';

interface Props {
  isLoading: boolean;
  error?: ClientError<string | null>;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.templates.absolute};
  ${({ theme }) => theme.templates.centerContent};
`;

const ContentLoader: React.FC<Props> = ({ children, isLoading, error }) => {
  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (error?.error) {
    return <ErrorWrapper message={error.error} />;
  }

  return <>{children}</>;
};

export { ContentLoader };
