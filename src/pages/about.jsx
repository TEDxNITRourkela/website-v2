import React from 'react';

// Libraries
import { Helmet } from 'react-helmet';

// Components
import {
  FAQ,
  Executive,
  Team,
  PageContainer,
  InfoSection,
  ContentBanner,
  Container,
  SEO,
} from '../components';

// Assets
import { about, home } from '../../config/content';

const About = () => (
  <Container>
    <SEO title='TEDxNITRourkela | About' />

    <div style={{ marginTop: '2rem' }} />
    <InfoSection direction='right-left' first DATA={about.SECTION.ONE} columnReverse />
    <InfoSection direction='left-right' DATA={about.SECTION.TWO} link />
    <ContentBanner DATA={home.CONTENT2.THREE} wrapContainer={false} />

    <Executive />
    <Team />
    <FAQ />
    <div style={{ marginBottom: '5rem' }} />
  </Container>
);

export default About;
