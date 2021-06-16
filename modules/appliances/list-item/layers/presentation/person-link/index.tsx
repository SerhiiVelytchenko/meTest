import React from 'react';
import Link from 'next/link';

interface Props {
  pId: string;
}

const PersonLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/appliances/[id]' as={`/appliances/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { PersonLink };
