import React from 'react';

// libraries
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import {
  MainContainer,
  SubContainer,
  AboutContainer,
  NavContainer,
  BottomContainer,
  SocialContainer,
  NavLink,
  Container,
} from './styles';
import { Para2, Para1 } from '../..';

// assets
import { footer, nav } from '../../../../config/content';

const Footer = () => {
  const { logo, subHeading, contact, copyright, socials } = footer;
  const { navItems } = nav;

  const NAV1 = navItems.slice(0, navItems.length / 2);
  const NAV2 = navItems.slice(navItems.length / 2, navItems.length);

  return (
    <MainContainer>
      <Container>
        <SubContainer>
          <AboutContainer>
            <Link to='/'>
              <img className='logo' src={logo.src} alt={logo.alt} />
            </Link>
            <Para2 className='sub-heading'>{subHeading}</Para2>
          </AboutContainer>

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

          <AboutContainer>
            <Para1 className='contact-heading'>{contact.heading}</Para1>
            <Para2 className='contact-email'>{contact.body}</Para2>
            <Para2 className='privacy'>{contact.privacy}</Para2>
            <Para2 className='terms'>{contact.terms}</Para2>
          </AboutContainer>
        </SubContainer>

        <BottomContainer>
          <SocialContainer>
            {socials.map(({ icon, link }) => (
              <a key={link} href={link} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='icon' icon={icon} />
              </a>
            ))}
          </SocialContainer>

          <h5 className='copyright'>{copyright}</h5>
        </BottomContainer>
      </Container>
    </MainContainer>
  );
};

export default Footer;
