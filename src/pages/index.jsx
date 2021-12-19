import React, { useEffect, useState } from 'react';

// Libraries
import styled from 'styled-components';
import { onSnapshot, doc } from 'firebase/firestore';

// Utils
import { useFirebase } from '../utils/firebase';

// Components
import { Layout, Main, ContentBanner, Subscribe } from '../components';

// Assets
import { home } from '../../config/content';
import { GRAPHICS } from '../../config/img/graphics';

const DecorationOne = styled.img`
  position: absolute;
  top: 100px;
  right: 0px;
`;

const DecorationTwo = styled.img`
  position: absolute;
  bottom: -140px;
  left: 0px;
`;

const DecorationThree = styled.img`
  position: absolute;
  bottom: -450px;
  right: 0px;
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
