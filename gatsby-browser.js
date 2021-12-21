/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import './src/styles/global.css';
import * as React from 'react';
import loadable from '@loadable/component';
import { App } from './src/components';

const FirebaseProvider = loadable(() => import('./src/utils/firebase'));

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <App>{element}</App>
  </FirebaseProvider>
);
