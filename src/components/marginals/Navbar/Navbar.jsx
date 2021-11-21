import React, { useState } from 'react';

// Components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));

  return (
    <>
      <DesktopNavbar toggleMenuOpen={toggleMenuOpen} />
      {menuOpen && <MobileNavbar toggleMenuOpen={toggleMenuOpen} />}
    </>
  );
};
