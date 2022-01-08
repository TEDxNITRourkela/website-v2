/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

// Libraries
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Components
import { SpeakerSection, Container } from '../components';

// Assets
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

export const pageQuery = graphql`
  {
    mdx(fileAbsolutePath: { regex: "/content/live/" }) {
      frontmatter {
        dates
        speakers {
          isLongCard
          isPublished
          name
          shortDescription
          silhouette
          speakerImage
          description {
            content
            href
          }
          links {
            icon
            link
          }
        }
      }
    }
  }
`;

function Speaker({ data }) {
  const { frontmatter, dates } = data.mdx;
  const { speakers } = frontmatter;

  return (
    <Container>
      <Helmet>
        <title>TEDxNITRourkela | Speakers</title>
        <meta name='title' content='TEDxNITRourkela | Speakers' />
        <link rel='canonical' href='https://tedxnitrourkela.com/speakers' />
        {speakers.map(({ shortDescription, name }, index) => (
          <meta
            key={`speaker-${index}-${name}`}
            name='description'
            content={`TEDxNITRourkela ${dates} Speaker | ${name} |${shortDescription}`}
          />
        ))}
      </Helmet>

      <div style={{ marginTop: '3.5rem', marginBottom: '5rem' }}>
        <SpeakerSection title='TEDxNITRourkelaWomen 2022' data={speakers} />
        <Decoration src={GRAPHICS.TOP_LEFT} alt='ellipse' />
      </div>
    </Container>
  );
}

export default Speaker;
