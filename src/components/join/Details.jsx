/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Details({ scrollFun }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant='h2' className={`${classes.heading}`}>
        Team Inductions
      </Typography>
      <Typography variant='body2' className={classes.subHeading}>
        Team Induction Form for Academic Year 2022-23. Open for all years.
      </Typography>
      <Typography variant='body2' className={classes.subHeading}>
        Want to know more, check out the slideshow below!
      </Typography>
      <div className={classes.videoContainer}>
        <iframe
          width='560'
          height='315'
          src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFKm_d-5ro&#x2F;view?embed'
          title='Orientation Autumn 2021 | TEDxNITRourkela'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className={classes.video}
        />
      </div>
      <div className={classes.scrollDown}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={classes.scrollIcon}
          onClick={scrollFun}
        >
          <source src='https://res.cloudinary.com/tedxnitrourkela/video/upload/assets/gif/scrollDown_gj8lj3.mp4' type='video/mp4' />
        </video>

        <Typography variant='body1' className={classes.scrContent}>
          Scroll Down
        </Typography>
      </div>
    </div>
  );
}

export default Details;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '100px',
    },
  },
  heading: {
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
  },
  subHeading: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    opacity: 0.4,
  },
  videoContainer: {
    marginTop: '40px',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  scrollDown: {
    width: '100%',
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollIcon: {
    width: 36,
    height: 36,
    marginBottom: 10,
  },
  scrContent: {
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    fontWeight: 400,
  },
}));
