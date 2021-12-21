import React from 'react';

// Library
import { Helmet } from 'react-helmet';

// Utils
import {
  eventData,
  breadcrumbsData,
  faqData,
  logoData,
  merch,
} from '../../../utils/structuredData';

const StructuredData = () => {
  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(eventData)}</script>
      <script type='application/ld+json'>{JSON.stringify(faqData)}</script>
      <script type='application/ld+json'>{JSON.stringify(logoData)}</script>
      <script type='application/ld+json'>{JSON.stringify(breadcrumbsData)}</script>
      {merch.map((product) => (
        <script key={product.sku} type='application/ld+json'>
          {JSON.stringify(product)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
