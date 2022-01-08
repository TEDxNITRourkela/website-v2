import React from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Component
import Partners from '../components/partners/Partner';
import { Container } from '../components';

export const pageQuery = graphql`
  {
    mdx(fileAbsolutePath: { regex: "/content/live/" }) {
      frontmatter {
        dates
        partners {
          title
          partners {
            href
            img
            name
            width
          }
        }
      }
    }
  }
`;

function Partner({ data }) {
  const { frontmatter } = data.mdx;
  const { dates, partners } = frontmatter;

  const tags = [];
  partners.forEach(({ partners: list }) => {
    list.forEach(({ name, href }) => {
      tags.push(
        <meta
          key={href}
          name='description'
          content={`TEDxNITRourkela ${dates} | Partner | ${name}`}
        />,
      );
    });
  });

  return (
    <Container>
      <Helmet>
        <title>TEDxNITRourkela | Partners</title>
        <meta name='title' content='TEDxNITRourkela | Partners' />
        <link rel='canonical' href='https://tedxnitrourkela.com/partners' />

        {tags}
      </Helmet>

      <div style={{ marginTop: '2rem', marginBottom: '5rem' }}>
        {partners.map((pd, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Partners DATA={pd} key={index} />
        ))}
      </div>
    </Container>
  );
}

export default Partner;
