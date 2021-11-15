import React from 'react';

// Components
import { Layout, Table } from '../components';

// Assests
import { merch } from '../../config/content';

const Merch = () => {
  const { title, headings, body } = merch.SIZE;
  return (
    <Layout>
      <Table title={title} headings={headings} body={body} />
    </Layout>
  );
};

export default Merch;
