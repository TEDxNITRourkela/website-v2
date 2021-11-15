import React, { useState } from 'react';

// libaries
import styled from 'styled-components';

// Components
import { DesktopNavbar, MobileNavbar, Footer } from '../marginals';

const Layout = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Nav = styled.div`
  position: relative;
  width: 100%;
  top: 0;
`;

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export default ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));

  return (
    <Layout>
      <Nav>
        <DesktopNavbar toggleMenuOpen={toggleMenuOpen} />
        {menuOpen && <MobileNavbar toggleMenuOpen={toggleMenuOpen} />}
      </Nav>
      <Container>{children}</Container>
      <Footer />
    </Layout>
  );
};
