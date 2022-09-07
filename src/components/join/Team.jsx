/* eslint-disable max-len */
import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import { induction } from '../../../config/content';

function Details() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography variant='h3'>Responsibilities of Various Teams</Typography>
        <div className={classes.contentBody} style={{ position: 'relative' }}>
          <img
            src='https://res.cloudinary.com/tedxnitrourkela/image/upload/v1662544133/assets/graphics/image3_lcdv4b.png'
            alt='circles'
            style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}
          />
          <img
            src='https://res.cloudinary.com/tedxnitrourkela/image/upload/v1662544133/assets/graphics/image3_lcdv4b.png'
            alt='circles'
            style={{ position: 'absolute', right: 0, bottom: 350, zIndex: 0 }}
          />
          {induction.TEAMS.map((teams) => (
            <div key={teams.team} className={classes.contentItem}>
              <div className={classes.imgContainer}>
                {teams.images.map((image) => (
                  <img
                    key={image}
                    className={classes.img}
                    src={image}
                    alt={teams.team}
                    decoding='auto'
                    loading='eager'
                  />
                ))}
              </div>
              <Typography variant='body1' className={classes.contentText}>
                {teams.work}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  content: {
    margin: '60px 20px',
    color: '#fff',
    '@media (max-width: 600px)': {
      margin: '30px 0px',
    },
  },
  heading: {
    color: '#fff',
    fontFamily: 'Zilla Slab',
  },
  subHeading: {
    color: '#fff',
    fontWeight: 400,
    opacity: 0.4,
  },
  contentBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contentItem: {
    margin: '10px',
    padding: '20px',
    width: '45%',
    backgroundColor: '#2E2E2E',
    opacity: '0.8',
    borderRadius: '20%',
    zIndex: 0.5,
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    margin: '20px',
    width: 100,
    height: 100,
    borderRadius: '100%',
    backgroundColor: '#181818',
    '@media (max-width: 600px)': {
      width: 80,
      height: 80,
    },
  },
  contentText: {
    margin: '20px',
    fontWeight: 700,
  },
}));

