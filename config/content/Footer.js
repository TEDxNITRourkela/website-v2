/* eslint-disable max-len */
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { LOGOS } from '../img/logos';
import { facebook, twitter, instagram, youtube, linkedin } from '../website';

export default {
  title: 'Footer',
  logo: {
    src: LOGOS.TEDxNITRourkela.LIGHT,
    alt: 'TedxNITRourkela',
  },
  subHeading: 'This independent TEDx event is operated under licence from TED',
  contact: {
    heading: 'Contact Us:',
    body: 'info@tedxnitrourkela.com',
    privacy: 'Privacy Policy',
    terms: 'Terms of Services',
  },
  copyright: '© 2021 TEDxNITRourkela. All rights reserved.',
  socials: [
    {
      icon: faFacebookF,
      link: facebook,
    },
    {
      icon: faTwitter,
      link: twitter,
    },
    {
      icon: faYoutube,
      link: youtube,
    },
    {
      icon: faLinkedinIn,
      link: linkedin,
    },
    {
      icon: faInstagram,
      link: instagram,
    },
  ],
};
