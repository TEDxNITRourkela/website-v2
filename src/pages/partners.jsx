/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Heading2, PageContainer, Layout } from '../components';

// Component
import Partners from '../components/partners/Partner';
// import ContentBanner from '../components/shared/ContentBanner';

// Placeholder
import { PARTNER } from '../../config/content/Partner';

const Title = styled(Heading2)`
  font-weight: 800;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 10px 0;
`;

const HorizontalLine = styled.div`
    width: 80%;
    height: 1px;
    background-color: var(--color-secondary);
    opacity: 0.3;
    z-index: -1;
`;

function Partner() {

  return (
    <Layout>
      <Helmet>
        <title>TEDxNITRourkela | Partners</title>
        <meta name='title' content='TEDxNITRourkela | Partners' />
        <link rel='canonical' href='https://tedxnitrourkela.com/partners' />

        {PARTNER.ONE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}
        {PARTNER.TWO.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.THREE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.FOUR.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.FIVE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}
      </Helmet>

      <PageContainer style={{ marginTop: '150px' }}>
        <TitleContainer>
          <Title>
            TEDxNITRourkelaLive 2021
          </Title>
          <HorizontalLine />
        </TitleContainer>
        <Partners DATA={PARTNER.LIVE.ONE} />
        <Partners DATA={PARTNER.LIVE.TWO} />

        <TitleContainer>
          <Title>
            TedxNITRourkela 2021
          </Title>
          <HorizontalLine />
        </TitleContainer>
        <Partners DATA={PARTNER.ONE} main />
        <Partners DATA={PARTNER.TWO} />
        <Partners DATA={PARTNER.THREE} />
        <Partners DATA={PARTNER.FOUR} />
        <Partners DATA={PARTNER.FIVE} />

        {/* <ContentBanner DATA={PARTNER.CONTENT} wrapContainer /> */}
      </PageContainer>
    </Layout>
  );
}

export default Partner;

 