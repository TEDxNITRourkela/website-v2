/* eslint-disable max-len */
import React, { useRef } from 'react';

// Libraries
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Widget } from '@typeform/embed-react';

// Component
import Details from '../components/join/Details';
import Terms from '../components/join/Terms';
import Team from '../components/join/Team';
import { SEO } from '../components';

function Join() {
  const classes = useStyles();
  
  const ref = useRef();
  const scrollFun = () => {
    ref.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <>
      <SEO title='TEDxNITRourkela | Join' />

      <div>
        <img src='https://res.cloudinary.com/tedxnitrourkela/image/upload/v1662541993/assets/graphics/image1_a2zdmd.png' alt='circles' className={classes.image1} />
        <img src='https://res.cloudinary.com/tedxnitrourkela/image/upload/v1662541996/assets/graphics/image2_fna2iu.png' alt='circles' className={classes.image2} />
        <Container>
          <Details scrollFun={scrollFun} />
        </Container>
        <hr color='red' style={{ margin: '30px 0px' }} />
        <Container>
          <Team />
          <Container ref={ref}>
            <Widget id='gThpTlqg' style={{ height: '70vh' }} />
          </Container>
          <Terms />
        </Container>
      </div>
    </>
  );
}

export default Join;

const useStyles = makeStyles(() => ({
  image1: {
    position: 'absolute',
    left: 0,
    top: 0,
    '@media (max-width: 600px)': {
      visibility: 'hidden',
    },
  },
  image2: {
    position: 'absolute',
    right: 0,
    top: 0,
    '@media (max-width: 600px)': {
      visibility: 'hidden',
    },
  },
}));
