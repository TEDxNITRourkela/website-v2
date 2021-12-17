import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Components
import { NavContainer, LogoContainer, TabContainer, TabLink, Navbar, NavText } from './styles';
import { DropDown } from '../..';

// assets
import { nav } from '../../../../config/content';

const DropdownNavbarItem = ({ name, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <TabLink>
      <NavText onClick={() => setOpen(!open)}>{name} </NavText>
      {open && children}
    </TabLink>
  );
};

const DesktopNavbar = ({ toggleMenuOpen }) => {
  const [shadow, setShadow] = useState(false);
  const { logo, navItems } = nav;

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <NavContainer shadow={shadow}>
      <Navbar>
        <LogoContainer>
          <Link to='/'>
            <img src={logo.src} className='logo' alt={logo.alt} />
          </Link>
        </LogoContainer>

        <FontAwesomeIcon className='bars' onClick={toggleMenuOpen} icon={faBars} />

        <TabContainer>
          {navItems.map(({ link, name }) => {
            if (name === 'Events') {
              return (
                <DropdownNavbarItem name={name}>
                  <DropDown />
                </DropdownNavbarItem>
              );
            }
            return (
              <TabLink key={link} to={link}>
                <NavText>{name}</NavText>
              </TabLink>
            );
          })}
        </TabContainer>
      </Navbar>
    </NavContainer>
  );
};

export default DesktopNavbar;
