import React from 'react';

// Libraries
// import { graphql } from 'gatsby';

// Components
import { FAQ, Executive, Team, InfoSection, ContentBanner, Container, SEO } from '../components';

// Assets
import { about, home } from '../../config/content';

function About() {
  return (
    <Container>
      <SEO title='TEDxNITRourkela | About' />

      <div style={{ marginTop: '3.5rem' }} />
      <InfoSection direction='right-left' first DATA={about.SECTION.ONE} columnReverse />
      <InfoSection direction='left-right' DATA={about.SECTION.TWO} link />
      <ContentBanner DATA={home.CONTENT2.THREE} wrapContainer={false} />

      <Executive />
      <Team />
      <FAQ />
      <div style={{ marginBottom: '5rem' }} />
    </Container>
  );
}

export default About;
