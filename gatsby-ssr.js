import React from 'react';

// Components
import { App } from './src/components';

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <App>{element}</App>
  </FirebaseProvider>
);
