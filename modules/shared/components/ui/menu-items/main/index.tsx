import * as React from 'react';
// components
import Link from 'next/link';
// libs
import styled from 'styled-components';

interface Props {
  href: string;
  label: string;
}

const MenuI = styled.div`
  padding: 5px 10px;

  a {
    text-decoration: none;
    transition: opacity 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
    @media (max-width: 390px) {
      font-size: 10px;
    }
  }
`;

const MenuItem: React.FC<Props> = ({ href, label }) => (
  <MenuI>
    <Link href={href} passHref>
      <a>{label}</a>
    </Link>
  </MenuI>
);

export { MenuItem };
