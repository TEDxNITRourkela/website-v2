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

// assets
import { footer, nav } from '../../../../config/content';

const Footer = () => {
  const { logo, subHeading, contact, copyright, socials } = footer;
  const { navItems } = nav;

  const NAV1 = navItems.slice(0, navItems.length / 2);
  const NAV2 = navItems.slice(navItems.length / 2, navItems.length);

  return (
    <MainContainer>
      <SubContainer>
        <Container>
          <Link to='/'>
            <img className='logo' src={logo.src} alt={logo.alt} />
          </Link>
          <div className='sub-heading'>{subHeading}</div>
        </Container>

        <NavContainer>
          <div className='column'>
            {NAV1.map(({ link, name }) => (
              <NavLink className={link} key={link} to={link}>
                <div className='nav-text'>{name}</div>
              </NavLink>
            ))}
          </div>
          <div className='column'>
            {NAV2.map(({ link, name }) => (
              <NavLink className={link} key={link} to={link}>
                <div className='nav-text'>{name}</div>
              </NavLink>
            ))}
          </div>
        </NavContainer>

        <Container>
          <h3 className='contact-heading'>{contact.heading}</h3>
          <p className='contact-email'>{contact.body}</p>
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
    </MainContainer>
  );
};

export default Footer;
