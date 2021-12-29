import React from 'react';
import styled from 'styled-components';

// Libraries
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Components
import { EventHero, SpeakerSection, Container } from '../../components';
import Partner from '../../components/partners/Partner';

// Assets
import { GRAPHICS } from '../../../config/img/graphics';

const DecorationOne = styled.img`
  position: absolute;
  top: 390px;
  right: 0px;
  z-index: -1;
  @media (max-width: 500px) {
    top: 320px;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    top: 320px;
  }
`;

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(frontmatter: { slug: { eq: $path } }) {
      frontmatter {
        dates
        name
        registrationLink
        slug
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
        partners {
          title
          partners {
            img
            href
            name
            width
          }
        }
        about
      }
    }
  }
`;

const Events = ({ data }) => {
  const { frontmatter } = data.mdx;
  const { dates, name, speakers, partners, about, slug } = frontmatter;

  const speakersModified = speakers.map((speaker) => ({
    ...speaker,
    description: speaker.description.map(({ href, content }) =>
      href ? { href, content } : content,
    ),
  }));

  return (
    <div>
      <Helmet>
        <title>{`TEDxNITRourkela | ${name}`}</title>
        <meta name='title' content={`TEDxNITRourkela | ${name}`} />
        <link rel='canonical' href={`https://tedxnitrourkela.com${slug}`} />
      </Helmet>

      <EventHero year={dates} name={name} about={about} />

      <Container style={{ marginBottom: '100px' }}>
        <SpeakerSection title='Speakers' data={speakersModified} />
      </Container>

      <div style={{ marginTop: '150px' }}>
        {partners.map((DATA, index) => (
          <Partner DATA={DATA} key={index} />
        ))}
      </div>

      <DecorationOne src={GRAPHICS.TOP_RIGHT_EVENT} alt='ellipse' />
    </div>
  );
};

export default Events;
