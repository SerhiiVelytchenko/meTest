import React from 'react';
import Link from 'next/link';
import { Item } from '@md-vehicles/list/components/vehiclesCard/person-link/views';
interface Props {
  pId: string;
}

const PersonLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/vehicles/[id]' as={`/vehicles/${pId}`}>
    <Item>{children}</Item>
  </Link>
);

export { PersonLink };
