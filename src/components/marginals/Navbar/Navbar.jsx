import React, { useState } from 'react';

// Components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function () {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));

  const DropDownHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <DesktopNavbar
        toggleMenuOpen={toggleMenuOpen}
        handler={DropDownHandler}
        open={open}
        setOpen={setOpen}
        mobile={false}
      />
      {menuOpen && (
        <MobileNavbar
          toggleMenuOpen={toggleMenuOpen}
          handler={DropDownHandler}
          open={open}
          setOpen={setOpen}
          mobile
        />
      )}
    </>
  );
}
