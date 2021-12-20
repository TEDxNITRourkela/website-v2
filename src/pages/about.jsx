import React from 'react';

// Libraries
import { Helmet } from 'react-helmet';

// Components
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
    <Helmet>
      <title>TEDxNITRourkela | About Us</title>
      <meta name='title' content='TEDxNITRourkela | About Us' />
      <meta
        name='description'
        // eslint-disable-next-line
        content="TEDxNITRourkela is an independently organized TED event coordinated and curated by a group of NIT Rourkela students. We present people with the opportunity to suggest innovative and efficient ideas to tackle our society's various issues, thus gathering a diverse range of voices from many disciplines that exist to help humanity grow. From essential, radical, and exciting ideas to electrifying performances from performers who are on top of their respective fields, we aspire to deliver to you an experience you would not want to miss. "
      />
      <link rel='canonical' href='https://tedxnitrourkela.com/about' />
    </Helmet>
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
