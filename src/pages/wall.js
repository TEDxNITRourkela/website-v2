import React from 'react';

// Libraries
import { Helmet } from 'react-helmet';

// Components
import { Layout } from '../components';

function Wall() {

  return (
    <Layout>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela' />
        <link rel='canonical' href='https://tedxnitrourkela.com/wall' />
      </Helmet>
      <iframe
        allowFullScreen
        id='wallsio-iframe'
        src='https://my.walls.io/u6j9y?nobackground=1&amp;show_header=0'
        style={{
          border: '0px',
          height: '100vh',
          width: '100%',
        }}
        loading='lazy'
        title='TEDxNITRourkela 2021: Learning from the Past'
      />
    </Layout>
  );
}

export default Wall;