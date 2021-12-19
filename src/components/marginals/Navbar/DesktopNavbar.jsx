import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Components
import { NavContainer, LogoContainer, TabContainer, TabLink, Navbar, NavText } from './styles';
import { DropDown } from '../..';
import DropdownNavbarItem from './DropdownNavbarItem';

// assets
import { nav, events } from '../../../../config/content';

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
    return () => {
      setShadow();
    };
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
                <DropdownNavbarItem key={link} name={name}>
                  <DropDown data={events.NAVTEXT} />
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
