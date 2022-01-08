import React, { useEffect, useState } from 'react';

// Libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, doc, setDoc } from 'firebase/firestore';
import styled from 'styled-components';

// Components
import { Container, LiveStage, LiveStreamSidebar } from '../components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  height: calc(100vh - 120px);
  margin-top: 30px;

  @media (max-width: 700px) {
    grid-column: 1/3;
    height: auto;
    margin-bottom: 6rem;
  }
`;

const addData = () => {
  speakers.forEach(
    async ({ name, description, shortDescription, img, hasCompleted, youtubeLink }, index) => {
      await setDoc(doc(db, 'speakerLineup', `speaker-${index + 1}`), {
        name,
        description,
        shortDescription,
        img,
        hasCompleted,
        youtubeLink,
      });
    },
  );
};

// Firebase web config
const config = {
  type: process.env.GATSBY_TYPE,
  projectId: process.env.GATSBY_PROJECT_ID,
  privateKeyId: process.env.GATSBY_PRIVATE_KEY_ID,
  privateKey: process.env.GATSBY_PRIVATE_KEY,
  clientEmail: process.env.GATSBY_CLIENT_EMAIL,
  clientId: process.env.GATSBY_CLIENT_ID,
  authUri: process.env.GATSBY_AUTH_URI,
  tokenUri: process.env.GATSBY_TOKEN_URI,
  authProviderX509CertUrl: process.env.GATSBY_AUTH_PROVIDER_X509_CERT_URL,
  clientX509CertUrl: process.env.GATSBY_CLIENT_X509_CERT_URL,
};
const firebase = initializeApp(config);
const db = getFirestore(firebase);

function Live() {
  // const {firebase, db} = useFirebase();
  const [activeSession, setActiveSession] = useState(null);
  const [sessionDetails, setSessionDetails] = useState([]);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (firebase) {
      const fetchActiveSession = async () => {
        const unsub = onSnapshot(doc(db, 'activeStream', 'ufDtRYamOffDFc29hPsn'), (snap) => {
          setActiveSession(snap.data());
          return Promise.resolve();
        });
      };

      const fetchSessionDetails = async () => {
        const unsub = onSnapshot(collection(db, 'speakerLineup'), (snap) => {
          const docList = snap.docs.map((d) => d.data());
          setSessionDetails(docList);
          return Promise.resolve();
        });
      };

      const fetchData = async () => {
        await Promise.all([fetchActiveSession(), fetchSessionDetails()]);
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    function containerLoaded() {
      const container = document.getElementById('stream-container');
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        setContainerDimensions({
          width,
          height,
        });
      }
    }

    containerLoaded();
  }, [activeSession]);

  return (
    <Container style={{ marginBottom: '50px' }}>
      <GridContainer>
        <LiveStage youtubeLink={activeSession?.youtubeLink} speaker={activeSession} />
        <LiveStreamSidebar speakers={sessionDetails} channelId={activeSession?.discordChannelId} />
      </GridContainer>
    </Container>
  );
}
export default Live;
