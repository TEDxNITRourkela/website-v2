// Components
import * as React from 'react';
import loadable from '@loadable/component';
import { App } from './src/components';

const FirebaseProvider = loadable(() => import('./src/utils/firebase'));

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <App>{element}</App>
  </FirebaseProvider>
);