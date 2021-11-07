import React, { useState } from 'react';

// libaries
import styled from 'styled-components';

// Components
import { DesktopNavbar, MobileNavbar, MenuContext, Footer } from '../marginals';

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

export default ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));

  return (
    <Layout>
      <Nav>
        <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
          <DesktopNavbar />
          {menuOpen && <MobileNavbar />}
        </MenuContext.Provider>
      </Nav>
      {children}
      <Footer />
    </Layout>
  );
};
