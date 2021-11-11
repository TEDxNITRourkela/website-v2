import React from 'react';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import { MobileNavbarSection, TabLink } from './styles';
import { Para1 } from '../..';

// assets
import { nav } from '../../../../config/content';

const MobileNavbar = ({ toggleMenuOpen }) => {
  const { navItems } = nav;

  return (
    <MobileNavbarSection>
      <FontAwesomeIcon className='back-button' onClick={toggleMenuOpen} icon={faTimes} />

      <div className='mobile-nav-container'>
        <ul className='linkList'>
          {navItems.map(({ link, name }) => (
            <TabLink key={link} to={link} className='listItem' onClick={toggleMenuOpen}>
              <Para1>{name}</Para1>
            </TabLink>
          ))}
        </ul>
      </div>
    </MobileNavbarSection>
  );
};

export default MobileNavbar;
