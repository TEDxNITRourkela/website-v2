import React, { useEffect, useState } from 'react';

// Libraries
import { onSnapshot, doc } from 'firebase/firestore';

// Utils
import { useFirebase } from '../utils/firebase';

const Homepage = () => {
  const { firebase: app, db } = useFirebase();
  const [data, setData] = useState();

  useEffect(() => {
    if (app) {
      const getTrialData = async () => {
        // eslint-disable-next-line no-unused-vars
        const unsub = onSnapshot(doc(db, 'trial', 'trialDoc'), (snap) => {
          setData(snap.data());
          return Promise.resolve();
        });
      };

      const fetchData = async () => {
        await Promise.all([getTrialData()]);
      };

      fetchData();
    }
  }, [app, db]);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{data?.text}</h2>
      <img src={data?.img} alt='Trial' />
    </div>
  );
};

export default Homepage;
