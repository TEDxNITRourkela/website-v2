import React from 'react';

// Components
import { FAQ, Layout } from '../components';
import Executive from "../components/about/Executive";
import Team from '../components/about/Team';

const about = () => (
  <Layout>
    <Executive />
    <Team />

    <FAQ />
  </Layout>
);

export default about;
