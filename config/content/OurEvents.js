/* eslint-disable max-len */
import speaker from './speaker';
import { LOGOS } from '../img/logos';

export const CONTENT = {
  hero: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1639550836/TedxNITR/Events_bg_y2ersf.png',
  logo: {
    src: LOGOS.TEDxNITRourkela.LIGHT,
    alt: 'TedxNITRourkela',
  },
};

export const NAVTEXT = [
  {
    title: '2021',
    items: [
      {
        link: 'learning-from-the-past',
        text: 'Learning from the Past',
      },
      {
        link: 'the-case-for-optimism',
        text: 'The Case for Optimism',
      },
    ],
  },
];

export const EVENTS = [
  {
    year: '2021',
    events: [
      {
        key: 'learning-from-the-past',
        name: 'Learning from the Past',
        about:
          'Thought is a free bird, but chained within the realm of ones conscious self. It needs a shot, an effort, a spark that glows, engulfing the thought process, triggering it to action. It needs some necessary ingredients to pop out. One’s thought can revolutionize the world, creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up your thoughts and make it happen. We present you the best ways to realize your thoughts and make it successful.',
        speakers: speaker.GUESTS,
      },
      {
        key: 'the-case-for-optimism',
        name: 'The Case for Optimism',
        about:
          'Thought is a free bird, but chained within the realm of ones conscious self. It needs a shot, an effort, a spark that glows, engulfing the thought process, triggering it to action. It needs some necessary ingredients to pop out. One’s thought can revolutionize the world, creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up your thoughts and make it happen. We present you the best ways to realize your thoughts and make it successful.',
        speakers: speaker.LIVEGUESTS,
      },
    ],
  },
];
