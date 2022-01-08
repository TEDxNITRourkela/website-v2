import React, { useEffect, useState } from 'react';

// Libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, doc, setDoc } from 'firebase/firestore';
import styled from 'styled-components';

// Components
import { Container, LiveStage, LiveStreamSidebar } from '../components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-gap: 1rem;
  min-height: calc(100vh - 120px);
  height: auto;
  margin-top: 50px;
  margin-bottom: 5rem;

  @media (max-width: 700px) {
    grid-column: 1/3;
    height: auto;
    margin-bottom: 6rem;
  }
`;

// const lineup = [
//   {
//     name: 'Dr. Yojna Sah Jain',
//     description: 'Dr. Yojna Sah Jain is the founder and CEO of the digital healthcare company, HealthPrax. Apart from this, she is also an author of three books and a strong advocate for the propagation of Hindi and Indian culture.',
//     img: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641211287/2021-22/TEDxNITRourkelaWomen/yojna-sah-jain_psko8m.png',
//     shortDescription: 'Healthcare Expert | Entrepreneur',
//     youtubeLink: 'https://www.youtube.com/embed/Ab_5JLanGsQ',
//     hasCompleted: false,
//   },
//   {
//     name: 'Veethika Mishra',
//     description: 'Veethika Mishra has showcased her diligence and determination as a senior designer in numerous esteemed companies. She likes to explore the possibility of Play in solving sensitive real-world issues and is highly interested in open practices to improve learning experiences.',
//     img: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641211280/2021-22/TEDxNITRourkelaWomen/veethika-mishra_l0iuor.png',
//     shortDescription: 'Senior Product Designer | GitLab',
//     youtubeLink: 'https://www.youtube.com/embed/Ab_5JLanGsQ',
//     hasCompleted: false,
//   },
//   {
//     name: 'Dr. Hansika Kapoor',
//     description: "Dr. Hansika Kapoor works at Prayogshalaas a Research Author. Besides that, she is committed to studying and improving people's mental health and has looked into the negative creativity construct using psychophysiological methodologies.",
//     img: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641211295/2021-22/TEDxNITRourkelaWomen/hansika-kapoor_m7f0nk.png',
//     shortDescription: 'Research Author | FullBright Nehru Fellow',
//     youtubeLink: 'https://www.youtube.com/embed/Ab_5JLanGsQ',
//     hasCompleted: false,
//   },
//   {
//     name: 'Kaneenika Sinha',
//     description: "Kaneenika Sinha is a mathematician who is currently an Associate Professor of Mathematics at the IISER ,Pune. She has received her Bachelor of Arts (Honours) in mathematics from Lady Shriram College in Delhi and went on to Queen's University in Canada for her MSc and PhD.",
//     img: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641211298/2021-22/TEDxNITRourkelaWomen/kaneenika-sinha_apw5ji.png',
//     shortDescription: 'Associate Professor | Mathematics | IISER, Pune',
//     youtubeLink: 'https://www.youtube.com/embed/Ab_5JLanGsQ',
//     hasCompleted: false,
//   },
//   {
//     name: 'Ronkini Gupta',
//     description: 'Ronkini Gupta is an Indian playback singer and composer who shot into fame after winning the Saregamapa World Series back in 2004. She has won several awards in her fantastic career, including multiple Filmfare nominations.',
//     img: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641211298/2021-22/TEDxNITRourkelaWomen/ronkini-gupta_j2lfea.png',
//     shortDescription: 'Composer | Playback singer',
//     youtubeLink: 'https://www.youtube.com/embed/Ab_5JLanGsQ',
//     hasCompleted: false,
//   },
// ]

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

const Live = () => {
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
    <Container style={{paddingtop: '0px'}}>
      <GridContainer>
        <LiveStage youtubeLink={activeSession?.youtubeLink} speaker={activeSession} />
        <LiveStreamSidebar speakers={sessionDetails} channelId={activeSession?.discordChannelId} />
      </GridContainer>
    </Container>
  );
}
export default Live;
