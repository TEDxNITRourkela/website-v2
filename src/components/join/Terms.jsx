import React from 'react';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import { induction } from '../../../config/content';

function Terms() {
  const classes = useStyles();

  return (
    <Container style={{ position: 'relative' }}>
      <div className={classes.content}>
        <Typography variant='h3'>Terms and Conditions:</Typography>
        <ul className={classes.contentBody}>
          {induction.TERMS.map((term) => (
            <li key={`${term}`}>
              {typeof term === 'string' ? (
                <Typography variant='body2' className={classes.contentText}>
                  {term}
                </Typography>
              ) : (
                <Typography variant='body2' className={classes.contentText}>
                  {term.text}
                  <a href={term.link} className={classes.link}>
                    {term.linktext}
                  </a>
                </Typography>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Terms;

const useStyles = makeStyles(() => ({
  content: {
    margin: '60px 20px',
    color: '#fff',
    '@media (max-width: 600px)': {
      margin: '30px 0px',
    },
  },
  contentBody: { padding: '20px' },
  contentText: {
    fontWeight: 400,
  },
  link: {
    color: '#fff',
    fontWeight: 700,
    textDecoration: 'underline',
  },
}));
