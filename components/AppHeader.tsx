import React from 'react';
import Link from 'next/link';
import { Nav, Navbar } from 'react-bootstrap';

import styled from 'styled-components';

const AppHeader = () => {
  return (
    <StyledNavbar bg="light" variant="light">
      <StyledNavbar.Brand>
        <Link href="/">
          <a>Next Blog App</a>
        </Link>
      </StyledNavbar.Brand>
      <Nav>
        <StyledNavLink>
          <Link href="/posts/new">
            <a>New Post</a>
          </Link>
        </StyledNavLink>
      </Nav>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`;

const StyledNavLink = styled(Nav.Link)`
  text-decoration: none;
`;

export default AppHeader;
