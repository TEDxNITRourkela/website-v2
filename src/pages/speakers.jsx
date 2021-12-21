import React from 'react';
import styled from 'styled-components';

// Libraries
import { Helmet } from 'react-helmet';

// Components
import { SpeakerSection, Container } from '../components';

// Assets
import { speaker } from '../../config/content';
import { GRAPHICS } from '../../config/img/graphics';

const Decoration = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

const Speaker = () => (
  <Container>
    <Helmet>
      <title>TEDxNITRourkela | Speakers</title>
      <meta name='title' content='TEDxNITRourkela | Speakers' />
      <link rel='canonical' href='https://tedxnitrourkela.com/speakers' />
      {speaker.LIVEGUESTS.map(({ shortDescription, name }) => (
        <meta
          key={name}
          name='description'
          content={`TEDxNITRourkela Speaker | ${name} |${shortDescription}`}
        />
      ))}
    </Helmet>
    <div style={{ marginTop: '2rem', marginBottom: '5rem' }}>
      <SpeakerSection title='TEDxNITRourkelaLive 2021' data={speaker.LIVEGUESTS} />
      <Decoration src={GRAPHICS.TOP_LEFT} alt='ellipse' />
    </div>
  </Container>
);

export default Speaker;
