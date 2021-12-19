import React from 'react';

// Components
// eslint-disable-next-line max-len
import {
  FAQ,
  Layout,
  Executive,
  Team,
  PageContainer,
  InfoSection,
  ContentBanner,
} from '../components';

// Assets
import { about, home } from '../../config/content';

const About = () => (
  <Layout>
    <PageContainer>
      <InfoSection direction='right-left' first DATA={about.SECTION.ONE} columnReverse />
      <InfoSection direction='left-right' DATA={about.SECTION.TWO} link />
      <ContentBanner DATA={home.CONTENT2.THREE} wrapContainer={false} />

      <Executive />
      <Team />
      <FAQ />
    </PageContainer>
  </Layout>
);

export default About;
