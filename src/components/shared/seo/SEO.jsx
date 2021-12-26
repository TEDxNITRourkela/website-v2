import React from 'react';

// Libraries
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ title, description, img }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          organization {
            name
            url
            logo
          }
          social {
            twitter
            fbAppID
          }
        }
      }
    }
  `);

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: img || `${siteMetadata.canonicalUrl}${siteMetadata.image}`,
    url: `${siteMetadata.canonicalUrl}`,
    social: siteMetadata.social,
  };

  return (
    <Helmet title={title} defaultTitle={siteMetadata.title}>
      <html lang='en' />
      <meta charSet='utf-8' />
      <link rel='canonical' href={seo.url} />

      {/* General tags */}
      <meta name='title' content={seo.title} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta
        name='keywords'
        content='tedxnitrourkela, tedx, nit, nit rourkela, nitrkl, website, tedx talks'
      />

      {/* OpenGraph tags */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={seo.url} />
      <meta property='og:site_name' content={seo.title} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:url' content={seo.image} />
      <meta property='og:image:secure_url' content={seo.image} />
      <meta property='og:image:type' content='image/png' />
      <meta property='fb:app_id' content={seo.social.fbAppID} />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:creator' content={seo.social.twitter} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
    </Helmet>
  );
};

export default SEO;
