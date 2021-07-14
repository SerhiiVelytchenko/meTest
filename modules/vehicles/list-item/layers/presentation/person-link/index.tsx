import React from 'react';
import Link from 'next/link';

interface Props {
  pId: string;
}

const PersonLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/vehicles/[id]' as={`/vehicles/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { PersonLink };
