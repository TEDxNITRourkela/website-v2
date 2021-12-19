/* eslint-disable max-len */
import { LOGOS } from '../img/logos';

const CONTENT1 = {
  caption: 'TECHNOLOGY • ENTERTAINMENT • DESIGN',
  logo: {
    src: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1636208790/TedxNITR/White_Logo_ldguyq.png',
    alt: 'TedxNITRourkela',
  },
  heading: '"Learning from the Past"',
  video: {
    src: 'https://res.cloudinary.com/tedxnitrourkela/video/upload/assets/gif/scrollDown_gj8lj3.mp4',
    type: 'video/mp4',
    text: 'Scroll Down',
  },
  thankyouurl: {
    src: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1637665968/TedxNITR/thankyou_niz4ks.png',
    alt: 'Thank You Speakers',
  },
  brand: {
    heading: 'Want to be a brand ambassador for TEDxNITRourkela?',
    link: {
      text: 'Know More',
      path: '/',
    },
    buttonText: 'Apply Now',
  },
};

const CONTENT2 = {
  ONE: {
    TITLE: 'What is',
    CONTENT:
      "TEDxNITRourkela is an independently organized TED event coordinated and curated by a group of NIT Rourkela students. We present people with the opportunity to suggest innovative and efficient ideas to tackle our society's various issues, thus gathering a diverse range of voices from many disciplines that exist to help humanity grow. From essential, radical, and exciting ideas to electrifying performances from performers who are on top of their respective fields, we aspire to deliver to you an experience you would not want to miss.",
    LINKTEXT: 'Learn More about TEDxNITRourkela',
    LINK: 'https://www.ted.com/tedx/events/41324',
    LOGO: LOGOS.TEDxNITRourkela.LIGHT,
  },
  TWO: {
    TITLE: 'What is',
    CONTENT:
      'In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)',
    LINKTEXT: 'Learn More about TEDx',
    LINK: 'https://www.ted.com/tedx',
    LOGO: LOGOS.TEDx.DEFAULT,
  },
  THREE: {
    TITLE: 'What is',
    CONTENT:
      "TEDxNITRourkela is an independently organized TED event coordinated and curated by a group of NIT Rourkela students. We present people with the opportunity to suggest innovative and efficient ideas to tackle our society's various issues, thus gathering a diverse range of voices from many disciplines that exist to help humanity grow. From essential, radical, and exciting ideas to electrifying performances from performers who are on top of their respective fields, we aspire to deliver to you an experience you would not want to miss.",
    LOGO: LOGOS.TEDxNITRourkela.LIGHT,
  },
};

export default {
  CONTENT1,
  CONTENT2,
};
