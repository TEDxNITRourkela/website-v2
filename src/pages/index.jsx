import React, { useEffect, useState } from 'react';

// Libraries
import styled from 'styled-components';
import { onSnapshot, doc } from 'firebase/firestore';

// Components
import { Main, ContentBanner, Container } from '../components';

// Utils
import { useFirebase } from '../utils/firebase';

// Assets
import { home } from '../../config/content';
import { GRAPHICS } from '../../config/img/graphics';

const DecorationOne = styled.img`
  position: absolute;
  top: 100px;
  right: 0px;
  z-index: -1;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
  }
`;

const DecorationTwo = styled.img`
  position: absolute;
  bottom: -140px;
  left: 0px;
  z-index: -1;
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
  z-index: -1;
  @media (max-width: 600px) {
    width: 30%;
    height: auto;
    bottom: -600px;
  }
`;

const Homepage = () => {
  const { firebase: app, db } = useFirebase();
  const [data, setData] = useState();

  useEffect(() => {
    if (app && db) {
      const unsub = onSnapshot(doc(db, 'trial', 'trialDoc'), (snap) => {
        setData(snap.data());
      });

      return unsub;
    }
  }, [app, db]);

  return (
    <Container>
      <Main number='1' />
      <ContentBanner DATA={home.CONTENT2.ONE} wrapContainer={false} />

      {/* <Subscribe /> */}
      <DecorationOne src={GRAPHICS.TOP_RIGHT} alt='ellipse' />
      <DecorationTwo src={GRAPHICS.BOTTOM_LEFT} alt='ellipse' />
      <DecorationThree src={GRAPHICS.BOTTOM_RIGHT} alt='ellipse' />
    </Container>
  );
};

export default Homepage;
