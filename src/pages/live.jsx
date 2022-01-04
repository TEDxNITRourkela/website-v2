/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// Libraries
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore';

// Components
import { Container } from '../components';

// Utils
import { useFirebase } from "../utils/firebase";

const Live = () => {
	const {firebase, db} = useFirebase();
  const [activeSession, setActiveSession] = useState(null);
  const [sessionDetails, setSessionDetails] = useState([]);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (firebase) {
			// const addData = () => {
			// 	speakers.forEach(async ({name, description, shortDescription, img, hasCompleted, youtubeLink}, index) => {
			// 		await setDoc(doc(db, "speakerLineup", `speaker-${index+1}`), {
			// 			name,
			// 			description,
			// 			shortDescription,
			// 			img,
			// 			hasCompleted,
			// 			youtubeLink
			// 		})
			// 	})
			// }
			// addData();

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
    <Container>
      {/* <LiveSection
        youtubeLiveLink={activeSession?.link}
        title={activeSession?.title}
        speaker={activeSession?.speaker}
        img={activeSession?.img}
        designation={activeSession?.designation}
        sessionDetails={sessionDetails}
        containerDimensions={containerDimensions}
      /> */}
    </Container>
  );
};
export default Live;
