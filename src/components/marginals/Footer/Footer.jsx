import React from 'react';

// libraries
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import {
  MainContainer,
  SubContainer,
  Container,
  NavContainer,
  BottomContainer,
  SocialContainer,
  NavLink,
} from './styles';
import { Para2, Para1 } from '../..';
import { SectionContainer } from '../../shared';

// assets
import { footer, nav } from '../../../../config/content';

const Footer = () => {
  const { logo, subHeading, contact, copyright, socials } = footer;
  const { navItems } = nav;

  const NAV1 = navItems.slice(0, navItems.length / 2);
  const NAV2 = navItems.slice(navItems.length / 2, navItems.length);

  return (
    <MainContainer>
      <SectionContainer>
        <SubContainer>
          <Container>
            <Link to='/'>
              <img className='logo' src={logo.src} alt={logo.alt} />
            </Link>
            <Para2 className='sub-heading'>{subHeading}</Para2>
          </Container>

          <NavContainer>
            <div className='column'>
              {NAV1.map(({ link, name }) => (
                <NavLink className={link} key={link} to={link}>
                  <Para2 className='nav-text'>{name}</Para2>
                </NavLink>
              ))}
            </div>
            <div className='column'>
              {NAV2.map(({ link, name }) => (
                <NavLink className={link} key={link} to={link}>
                  <Para2 className='nav-text'>{name}</Para2>
                </NavLink>
              ))}
            </div>
          </NavContainer>

          <Container>
            <Para1 className='contact-heading'>{contact.heading}</Para1>
            <Para2 className='contact-email'>{contact.body}</Para2>
            <Para2 className='privacy'>{contact.privacy}</Para2>
            <Para2 className='terms'>{contact.terms}</Para2>
          </Container>
        </SubContainer>

        <BottomContainer>
          <SocialContainer>
            {socials.map(({ icon, link }) => (
              <Link key={link} to={link}>
                <FontAwesomeIcon className='icon' icon={icon} />
              </Link>
            ))}
          </SocialContainer>

          <h5 className='copyright'>{copyright}</h5>
        </BottomContainer>
      </SectionContainer>
    </MainContainer>
  );
};

export default Footer;
