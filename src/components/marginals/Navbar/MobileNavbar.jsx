import React from 'react';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Components
import { MobileNavbarSection, Tab, TabLink } from './styles';

// assets
import { nav } from '../../../../config/content';

const MobileNavbar = ({ toggleMenuOpen }) => {
  const { navItems } = nav;

  return (
    <MobileNavbarSection>
      <FontAwesomeIcon className='back-button' onClick={toggleMenuOpen} icon={faArrowRight} />

      <div className='mobile-nav-container'>
        <ul className='linkList'>
          {navItems.map(({ link, name }) => (
            <TabLink key={link} to={link} className='listItem' onClick={toggleMenuOpen}>
              <Tab>{name}</Tab>
            </TabLink>
          ))}
        </ul>
      </div>
    </MobileNavbarSection>
  );
};

export default MobileNavbar;
