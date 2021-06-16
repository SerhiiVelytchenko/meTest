import React from 'react';
import Link from 'next/link';
import { Item } from '@md-appliances/list/components/applianceCard/person-link/views';
interface Props {
  pId: string;
}

const PersonLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/appliances/[id]' as={`/appliances/${pId}`}>
    <Item>{children}</Item>
  </Link>
);

export { PersonLink };
