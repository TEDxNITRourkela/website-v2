/* eslint-disable max-len */

import { faBook, faGlobe, faUniversity } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const SILHOUETTE = {
  ONE: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group-6_hmcoyr.png',
  TWO: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group-7_pjxyaw.png',
  THREE:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group-3_wzzvpx.png',
  FOUR: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group-8_gehlfh.png',
  FIVE: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group_vhndzb.png',
  SIX: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group-1_eli58u.png',
  SEVEN:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group-5_o7scj7.png',
  EIGHT:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/silhouettes/Mask_Group-4_jaqgo1.png',
};

const SPEAKERS = {
  ONE: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Zach_King_2_stntn1.png',
  TWO: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Adam_Grant_1_oh18t8.png',
  THREE:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Jamil_Zaki_zewzqc.png',
  FOUR: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Isha_Datar_i2acyl.png',
  FIVE: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Steven_Johnson_2_pks9l9.png',
  SIX: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Pardis_Parker_1_ssigeg.png',
  SEVEN:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/FRAME_gd1npb.png',
  EIGHT:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/2021-22/TEDxNITRourkelaLive/speakers/Group_16_otphec.png',
};

const LIVEGUESTS = [
  {
    isPublished: true,
    name: 'Zach King',
    description: [
      'Zach King is one of the most eminent internet personalities, filmmakers, and illusionists. He created his mark in building digital magic through his exemplary editing skills and has been honored as well as featured  in several media outlets for his vines, including ',
      { href: 'https://in.mashable.com/', content: 'Mashable ' },
      'and ',
      { href: 'https://www.complex.com/', content: 'Complex' },
      ' magazine.',
    ],
    shortDescription: 'Filmmaker | Illusionist',
    speakerImage: SPEAKERS.ONE,
    shilhouette: SILHOUETTE.ONE,
    isLongCard: false,
    links: [
      {
        link: 'https://www.zachkingmagic.com/',
        icon: faGlobe,
      },
      {
        link: 'https://www.youtube.com/channel/UCq8DICunczvLuJJq414110A',
        icon: faYoutube,
      },
      {
        link: 'https://twitter.com/zachking?lang=en',
        icon: faTwitter,
      },
      {
        link: 'https://www.instagram.com/zachking/?hl=en',
        icon: faInstagram,
      },
      {
        link: 'https://www.facebook.com/ZachKingVine',
        icon: faFacebookF,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Adam Grant',
    description: [
      'Adam Grant is a professor at the ',
      {
        href: 'https://mgmt.wharton.upenn.edu/profile/grantad/',
        content: 'Wharton School of the University of Pennsylvania',
      },
      ', specializing in organizational psychology. Apart from being a psychologist, ​He is the #1 New York Times bestselling author of 5 books: Think Again, Give and Take, Originals, Option B, and Power Moves. ',
    ],
    shortDescription: 'Organizational Psychologist | New York Times bestselling author',
    speakerImage: SPEAKERS.TWO,
    shilhouette: SILHOUETTE.TWO,
    isLongCard: false,
    links: [
      {
        link: 'https://mgmt.wharton.upenn.edu/profile/grantad/',
        icon: faUniversity,
      },
      {
        link: 'https://twitter.com/AdamMGrant?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        icon: faTwitter,
      },
      {
        link: 'https://www.linkedin.com/in/adammgrant/',
        icon: faLinkedinIn,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Jamil Zaki',
    description: [
      'Jamil Zaki is a professor at ',
      {
        href: 'https://psychology.stanford.edu/people/jamil-zaki',
        content: 'Stanford University',
      },
      ' and the director of the Stanford Social Neuroscience Lab. He is the winner of the prestigious Sage Young Scholar and has his writings featured in The New York Times, The Washington Post, The New Yorker, and The Atlantic',
    ],
    shortDescription: 'Stanford Director Social Neuroscience Lab',
    speakerImage: SPEAKERS.THREE,
    shilhouette: SILHOUETTE.THREE,
    isLongCard: false,
    links: [
      {
        link: 'https://psychology.stanford.edu/people/jamil-zaki',
        icon: faUniversity,
      },
      {
        link: 'https://twitter.com/zakijam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        icon: faTwitter,
      },
      {
        link: 'https://www.linkedin.com/in/jamil-zaki-b0b4a9192',
        icon: faLinkedinIn,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Isha Datar',
    description: [
      'Isha Datar, apart from being the Executive Director of ',
      {
        href: 'https://new-harvest.org',
        content: 'New Harvest',
      },
      ' has made her mark by emphasizing and focusing on the advancement of cellular agriculture. She has highlighted the opportunities for cutting-edge innovation to farmers, producers, grocery stores, to name a few.',
    ],
    shortDescription: 'Executive Director New Harvest',
    speakerImage: SPEAKERS.FOUR,
    shilhouette: SILHOUETTE.FOUR,
    isLongCard: false,
    links: [
      {
        link: 'https://new-harvest.org/isha-paper-ten-year-anniversary/',
        icon: faGlobe,
      },
      {
        link: 'https://instagram.com/newharvestorg?utm_medium=copy_link',
        icon: faInstagram,
      },
      {
        link: 'https://twitter.com/IshaDatar?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        icon: faTwitter,
      },
      {
        link: 'https://www.linkedin.com/in/ishadatar',
        icon: faLinkedinIn,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Steven Johnson',
    description: [
      'Steven Johnson has authored numerous books on the intersection of science, technology, and culture. He is the recipient of ',
      {
        href: 'https://newhouse.syr.edu/centers/mirror-awards/',
        content: 'Newhouse School’s fourth annual Mirror Awards',
      },
      ' for his ',
      {
        href: 'https://newhouse.syr.edu/centers/mirror-awards/',
        content: 'TIME magazine',
      },
      ' cover article. His writings have been featured in The New York Times, The Wall Street Journal, etc.',
    ],
    shortDescription: 'Author | Media Theorist',
    speakerImage: SPEAKERS.FIVE,
    shilhouette: SILHOUETTE.FIVE,
    isLongCard: false,
    links: [
      {
        link: 'https://stevenberlinjohnson.com/',
        icon: faGlobe,
      },
      {
        link: 'https://www.facebook.com/stevenjohnsonauthor',
        icon: faFacebookF,
      },
      {
        link: 'https://twitter.com/stevenbjohnson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        icon: faTwitter,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Pardis Parker',
    description: [
      'Pardis Parker is an award-winning director, writer, actor, and comedian. He has done commendable work in the field of entertainment and has been validated with several prestigious awards and nominations. His acting work has received acclamation from the ',
      {
        href: 'https://nsi-canada.ca/',
        content: 'National Screen Institute of Canada.',
      },
    ],
    shortDescription: 'Award winning Director | Comedian',
    speakerImage: SPEAKERS.SIX,
    shilhouette: SILHOUETTE.SIX,
    isLongCard: false,
    links: [
      {
        link: 'http://www.pardisparker.com/',
        icon: faGlobe,
      },
      {
        link: 'https://www.instagram.com/pardisparker/?hl=en',
        icon: faInstagram,
      },
      {
        link: 'https://www.facebook.com/pardisparker',
        icon: faFacebookF,
      },
      {
        link: 'https://twitter.com/pardisparker?lang=en',
        icon: faTwitter,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Jennifer Aaker & Naomi Bagdonas',
    description: [
      'Jennifer Aaker and Naomi Bagdonas are psychologists and professors at the ',
      {
        href: 'https://www.gsb.stanford.edu/',
        content: 'Stanford Graduate School of Business.',
      },
      ' They have co-authored the bestseller, ',
      {
        href: 'https://www.humorseriously.com/',
        content: '“Humor, Seriously,”',
      },
      ' and have given numerous talks. They are best known for their deep knowledge of the importance of humour in business.',
    ],
    shortDescription: 'Psychologists & Professors @Stanford',
    speakerImage: SPEAKERS.SEVEN,
    shilhouette: SILHOUETTE.SEVEN,
    isLongCard: true,
    links: [
      {
        link: 'https://www.gsb.stanford.edu/',
        icon: faUniversity,
      },
      {
        link: 'https://www.humorseriously.com/',
        icon: faBook,
      },
      {
        link: 'https://www.youtube.com/watch?v=epWf9SI8MZI&t=9s',
        icon: faYoutube,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Jenny Scheinman & Nels Cline & Todd Sickafoose',
    description: [
      'Jenny Scheinman is a singer, fiddle player, and songwriter. She has been on numerous ',
      {
        href: 'https://www.grammy.com/',
        content: 'Grammy-winning',
      },
      ' recordings.',
      'Nels Cline is best known as the lead guitarist in the band ',
      {
        href: 'https://wilcoworld.net/',
        content: 'Wilco.',
      },
      '. His recording and performing career — spanning jazz, rock, punk, and experimental — is well into its fourth decade.',
      'Todd Sickafoose is an American jazz and rock musician, composer, and producer. He is a legatee of the ',
      {
        href: 'https://www.grammy.com/',
        content: 'Grammy Award',
      },
      ' and ',
      {
        href: 'https://www.tonyawards.com/',
        content: 'Tony Award.',
      },
    ],
    shortDescription:
      'Top violinists in the DownBeat Critics Poll • Guitarist | Composer • Jazz and Rock musician',
    speakerImage: SPEAKERS.EIGHT,
    shilhouette: SILHOUETTE.EIGHT,
    isLongCard: true,
    links: [
      {
        link: 'https://www.jennyscheinman.com/',
        icon: faGlobe,
      },
      {
        link: 'https://www.instagram.com/jenny_scheinman/',
        icon: faInstagram,
      },
      {
        link: 'https://www.nelscline.com/',
        icon: faGlobe,
      },
      {
        link: 'https://www.instagram.com/nelscline/',
        icon: faInstagram,
      },
      {
        link: 'http://www.toddsickafoose.com/',
        icon: faGlobe,
      },
      {
        link: 'https://www.facebook.com/tinyresistors/',
        icon: faFacebookF,
      },
    ],
  },
];

export default {
  LIVEGUESTS,
};
