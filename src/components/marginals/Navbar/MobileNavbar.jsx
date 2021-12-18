import React from 'react';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import { MobileNavbarSection, TabLink, NavText } from './styles';
import { DropDown } from '../..';
import DropdownNavbarItem from './DropdownNavbarItem';

// assets
import { nav, events } from '../../../../config/content';

const MobileNavbar = ({ toggleMenuOpen }) => {
  const { navItems } = nav;

  return (
    <MobileNavbarSection>
      <FontAwesomeIcon className='back-button' onClick={toggleMenuOpen} icon={faTimes} />

      <div className='mobile-nav-container'>
        <ul className='linkList'>
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
        </ul>
      </div>
    </MobileNavbarSection>
  );
};

export default MobileNavbar;
