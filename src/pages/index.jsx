import React, { useEffect, useState } from 'react';

// Libraries
import { onSnapshot, doc } from 'firebase/firestore';

// Utils
import { useFirebase } from '../utils/firebase';
import { Layout } from '../components/shared';

const Homepage = () => {
  const { firebase: app, db } = useFirebase();
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
      <Layout>Hello World</Layout>
    </div>
  );
};

export default Homepage;
