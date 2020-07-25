import React from 'react';
import styled from 'styled-components';

import AppHeader from './AppHeader';

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  margin: 1rem;
`;

export default AppLayout;
