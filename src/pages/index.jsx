import React, { useEffect, useState } from 'react';

// Libraries
import { onSnapshot, doc } from 'firebase/firestore';

// Utils
import { useFirebase } from '../utils/firebase';
import { Layout, PageContainer } from '../components';

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
        <PageContainer>Hello World</PageContainer>
      </Layout>
    </div>
  );
};

export default Homepage;
