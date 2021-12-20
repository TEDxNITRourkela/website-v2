import React, { useEffect, useState } from 'react';

// Libraries
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { onSnapshot, doc } from 'firebase/firestore';

// Components
import { Layout, Main, ContentBanner, Subscribe } from '../components';

// Utils
import { useFirebase } from '../utils/firebase';
import { eventData, breadcrumbsData, faqData, logoData, merch } from '../utils/structuredData';

// Assets
import { home } from '../../config/content';
import { GRAPHICS } from '../../config/img/graphics';

const DecorationOne = styled.img`
  position: absolute;
  top: 100px;
  right: 0px;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
  }
`;

const DecorationTwo = styled.img`
  position: absolute;
  bottom: -140px;
  left: 0px;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
    bottom: -90px;
  }
`;

const DecorationThree = styled.img`
  position: absolute;
  bottom: -450px;
  right: 0px;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
    bottom: -600px;
  }
`;

const Homepage = () => {
  const { firebase: app, db } = useFirebase();
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState();

  useEffect(() => {
    if (app && db) {
      const getTrialData = async () => {
        // eslint-disable-next-line no-unused-vars
        const unsub = onSnapshot(doc(db, 'trial', 'trialDoc'), (snap) => {
          setData(snap.data());
          return Promise.resolve();
        });
      };

      getTrialData();
    }
  }, [app, db]);

  return (
    <div>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela' />
        <link rel='canonical' href='https://tedxnitrourkela.com' />

        <script type='application/ld+json'>{JSON.stringify(eventData)}</script>
        <script type='application/ld+json'>{JSON.stringify(faqData)}</script>
        <script type='application/ld+json'>{JSON.stringify(logoData)}</script>
        <script type='application/ld+json'>{JSON.stringify(breadcrumbsData)}</script>
        {merch.map((product) => (
          <script key={product.sku} type='application/ld+json'>
            {JSON.stringify(product)}
          </script>
        ))}
      </Helmet>
      <Layout>
        <Main number='1' />
        <ContentBanner DATA={home.CONTENT2.ONE} wrapContainer={false} />
        <Subscribe />
        <DecorationOne src={GRAPHICS.TOP_RIGHT} alt='ellipse' />
        <DecorationTwo src={GRAPHICS.BOTTOM_LEFT} alt='ellipse' />
        <DecorationThree src={GRAPHICS.BOTTOM_RIGHT} alt='ellipse' />
      </Layout>
    </div>
  );
};

export default Homepage;
