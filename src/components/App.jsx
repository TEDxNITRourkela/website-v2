import React from 'react';

// Components
import { SEO, StructuredData, Layout } from '.';

const App = ({ children }) => {
  return (
    <>
      <SEO />
      <StructuredData />

      <Layout>{children}</Layout>
    </>
  );
};

export default App;
