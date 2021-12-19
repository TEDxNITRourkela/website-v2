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
    title: '2020',
    items: [
      {
        link: 'lorem-ipsum-one',
        text: 'Lorem One',
      },
      {
        link: 'lorem-ipsum-two',
        text: 'Lorem Two',
      },
    ],
  },
  {
    title: '2021',
    items: [
      {
        link: 'lorem-ipsum-three',
        text: 'Lorem Three',
      },
      {
        link: 'lorem-ipsum-four',
        text: 'Lorem Four',
      },
      {
        link: 'lorem-ipsum-five',
        text: 'Lorem Five',
      },
    ],
  },
];

export const EVENTS = [
  {
    year: '2020',
    events: [
      {
        key: 'lorem-ipsum-one',
        name: 'Lorem One',
        about:
          'Thought is a free bird, but chained within the realm of ones conscious self. It needs a shot, an effort, a spark that glows, engulfing the thought process, triggering it to action. It needs some necessary ingredients to pop out. One’s thought can revolutionize the world, creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up your thoughts and make it happen. We present you the best ways to realize your thoughts and make it successful.',
        speakers: speaker.LIVEGUESTS,
      },
      {
        key: 'lorem-ipsum-two',
        name: 'Lorem Two',
        about:
          'Thought is a free bird, but chained within the realm of ones conscious self. It needs a shot, an effort, a spark that glows, engulfing the thought process, triggering it to action. It needs some necessary ingredients to pop out. One’s thought can revolutionize the world, creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up your thoughts and make it happen. We present you the best ways to realize your thoughts and make it successful.',
        speakers: speaker.LIVEGUESTS,
      },
    ],
  },
  {
    year: '2021',
    events: [
      {
        key: 'lorem-ipsum-three',
        name: 'Lorem Three',
        about:
          'Thought is a free bird, but chained within the realm of ones conscious self. It needs a shot, an effort, a spark that glows, engulfing the thought process, triggering it to action. It needs some necessary ingredients to pop out. One’s thought can revolutionize the world, creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up your thoughts and make it happen. We present you the best ways to realize your thoughts and make it successful.',
        speakers: speaker.LIVEGUESTS,
      },
      {
        key: 'lorem-ipsum-four',
        name: 'Lorem Four',
        about:
          'Thought is a free bird, but chained within the realm of ones conscious self. It needs a shot, an effort, a spark that glows, engulfing the thought process, triggering it to action. It needs some necessary ingredients to pop out. One’s thought can revolutionize the world, creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up your thoughts and make it happen. We present you the best ways to realize your thoughts and make it successful.',
        speakers: speaker.LIVEGUESTS,
      },
      {
        key: 'lorem-ipsum-five',
        name: 'Lorem Five',
        about:
          'Thought is a free bird, but chained within the realm of ones conscious self. It needs a shot, an effort, a spark that glows, engulfing the thought process, triggering it to action. It needs some necessary ingredients to pop out. One’s thought can revolutionize the world, creating the aura transforming the era. We at TEDxNITRourkela energize your mind to open up your thoughts and make it happen. We present you the best ways to realize your thoughts and make it successful.',
        speakers: speaker.LIVEGUESTS,
      },
    ],
  },
];
