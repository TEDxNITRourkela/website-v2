/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// Libraries
import { getFirestore, onSnapshot, doc } from 'firebase/firestore';

// Utils
import getFirebase from '../utils/firebase';

const app = getFirebase();
let db;
if (app) db = getFirestore(app);

const Homepage = () => {
  const [data, setData] = useState();

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{data?.text}</h2>
      <img src={data?.img} alt='Trial' />
    </div>
  );
};

export default Homepage;
