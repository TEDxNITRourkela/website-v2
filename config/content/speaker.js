/* eslint-disable max-len */

import { faBook, faGlobe, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';
import {
  faBehance,
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faQuora,
  faSpotify,    
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

const SPEAKERS_EVENT_ONE = {
  ONE: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/ashwathy-satheeshan-removebg-preview_100_ycbz30.png',
  TWO: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/anup_nandy-removebg-preview_hsno3b.png',
  THREE:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/lisa-russell-removebg-preview_bfjbup.png',
  FOUR: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/pranav_khaitan-removebg-preview_yuzml1.png',
  FIVE: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/jimy-removebg-preview_hxqrld.png',
  SIX: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/lokesh-removebg-preview_rmxpfx.png',
  SEVEN:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/kabir-cafe-bg_mi8xsp.png',
  EIGHT:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/riki-biswas-removebg-preview_mxcqf2.png',
  NINE: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/speakers/sabhyasachi-patra-removebg-preview_rrx28e.png',
};

const GUESTS = [
  {
    isPublished: true,
    shilhouette: SILHOUETTE.ONE,
    name: 'Ashwathy  Satheesan',
    description: [
      'A graduate of ',
      { href: 'http://www.nid.edu/', content: 'NID Ahemdabad' },
      ', Ashwathy is passionate about projects dealing with design activism, circular economy & the future. She has won numerous accolades, including National Winner of the prestigious ',
      {
        href: 'https://www.jamesdysonaward.org/',
        content: 'James Dyson Award',
      },
      ' in 2019.',
    ],
    shortDescription: 'Winner | James Dyson Award',
    speakerImage: SPEAKERS_EVENT_ONE.ONE,
    isLongCard: false,
    links: [
      {
        link: 'https://www.linkedin.com/in/ashwathysatheesan/',
        icon: faLinkedinIn,
      },
      {
        link: 'https://www.instagram.com/ashwathy_cs/',
        icon: faInstagram,
      },
      {
        link: 'https://www.behance.net/AshwathySatheesan/',
        icon: faBehance,
      },
    ],
  },
  {
    isPublished: true,
    shilhouette: SILHOUETTE.TWO,
    name: 'Anup Nandy',
    description: [
      'Professor Anup Nandy, a researcher in AI & ML area and professor at ',
      { href: 'https://nitrkl.ac.in/', content: 'NIT Rourkela' },
      ', was one of the few Indian scientists selected to present his research in the momentous 5th BRICS Young Scientist Conclave 2020.',
    ],
    shortDescription: 'Represented India @ 5th BRICS YSC',
    speakerImage: SPEAKERS_EVENT_ONE.TWO,
    isLongCard: false,
    links: [
      {
        link: 'https://www.linkedin.com/in/anup-nandy-14032a178/',
        icon: faLinkedinIn,
      },
      {
        link: 'https://www.nitrkl.ac.in/FProfile.aspx?nandya',
        icon: faGraduationCap,
      },
      {
        link: 'https://scholar.google.co.in/citations?user=9bnp0PQAAAAJ&hl=en',
        icon: faBook,
      },
    ],
  },
  {
    isPublished: true,
    shilhouette: SILHOUETTE.THREE,
    name: 'Lisa Russell',
    description: [
      'Lisa Russell, MPH, is an ',
      { href: 'https://emmys.com', content: 'Emmy-winning' },
      ' filmmaker and art curator. She is a two-time ',
      {
        href: 'https://www.ted.com/about/programs-initiatives/tedx-program',
        content: 'TEDx',
      },
      ' speaker, Fulbright Specialist and an accomplished presenter along with many other accolades.',
    ],
    shortDescription: 'Winner | Emmy Award 2009',
    speakerImage: SPEAKERS_EVENT_ONE.THREE,
    isLongCard: false,
    links: [
      {
        link: 'https://www.linkedin.com/in/lisarussellfilms/',
        icon: faLinkedinIn,
      },
      {
        link: 'https://twitter.com/lisarusselfilm',
        icon: faTwitter,
      },
      {
        link: 'https://www.instagram.com/lisarussellfilm/',
        icon: faInstagram,
      },
      {
        link: 'http://lisa-russell-films.squarespace.com/',
        icon: faGlobe,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Pranav Khaitan',
    description: [
      'Pranav Khaitan is a senior engineering lead at Google AI where he led various R&D projects like Chrome, Youtube. He was also a part of the ',
      { href: 'https://www.nobelprize.org/', content: 'Nobel Peace Prize' },
      ' winning team in 2020. He has also been working to solve humanitarian aid problems in partnership with the ',
      { href: 'https://www.wfp.org/', content: 'UN' },
      ' and the ',
      { href: 'https://www.worldbank.org/en/home', content: 'World Bank.' },
    ],
    shortDescription: 'Winning Team of Nobel Peace Prize 2020',
    speakerImage: SPEAKERS_EVENT_ONE.FOUR,
    isLongCard: false,
    links: [
      {
        link: 'https://www.linkedin.com/in/pranavkhaitan/',
        icon: faLinkedinIn,
      },
      {
        link: 'https://twitter.com/pranavkhaitan',
        icon: faTwitter,
      },
      {
        link: 'https://research.google/people/106395/',
        icon: faBook,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Jeremy Philemon',
    description: [
      'Jeremy has been maintaining the ',
      { href: 'https://covid19india.org', content: 'covid19india.org' },
      ' website since its initial push to production, giving access to centralized, reliable data presented with clarity and good faith.',
    ],
    shortDescription: 'Team led the initiative covid19india.org',
    speakerImage: SPEAKERS_EVENT_ONE.FIVE,
    isLongCard: false,
    links: [
      {
        link: 'https://www.linkedin.com/in/jeremy-philemon-363129121',
        icon: faLinkedinIn,
      },
      {
        link: 'https://twitter.com/jeremyphilemon?s=09',
        icon: faTwitter,
      },
      {
        link: 'https://github.com/jeremyphilemon',
        icon: faGithub,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Lokesh K. Gurram',
    description: [
      'Co-founder at ',
      { href: 'https://finshots.in/', content: 'Finshots' },
      ', a popular and emerging finance bulletin, he is an alumnus of ',
      { href: 'https://home.iitd.ac.in/', content: 'IIT Delhi' },
      ' and one of the few people who truly understand the meaning of building revolutionary services and technology.',
    ],
    shortDescription: 'Co-founder of Ditto by Finshots',
    speakerImage: SPEAKERS_EVENT_ONE.SIX,
    isLongCard: false,
    links: [
      {
        link: 'https://in.linkedin.com/in/lokeshgurram',
        icon: faLinkedinIn,
      },
      {
        link: 'https://twitter.com/lokesh_gurram',
        icon: faTwitter,
      },
      {
        link: 'https://www.quora.com/profile/Lokesh-Gurram',
        icon: faQuora,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Kabir Cafe',
    description: [
      'Kabir Cafe is a Mumbai-based folk fusion band known for taking the voice of the saint Kabir Das across the country through their compositions.  In an era where music is losing its credibility, Kabir Cafe has made sure that they present Kabir’s poetry musically without compromising its beauty. Their song ',
      {
        href: 'https://open.spotify.com/album/4qsUOnusaOfaWLEVye5ekB?highlight=spotify:track:18dts4OqWOQTGFlMTGodkk',
        content: '‘Mat Kar Maya ko Ahankar’',
      },
      ' for instance, was featured in the hit series, ',
      {
        href: 'https://www.sonyliv.com/shows/scam-1992-the-harshad-mehta--1700000292',
        content: '“Scam 1992’',
      },
      ', and was widely critically acclaimed.',
    ],
    shortDescription: 'Scam 1992 Song Artist',
    speakerImage: SPEAKERS_EVENT_ONE.SEVEN,
    isLongCard: true,
    links: [
      {
        link: 'https://twitter.com/KabirCafe',
        icon: faTwitter,
      },
      {
        link: 'https://www.instagram.com/kabircafelive/',
        icon: faInstagram,
      },
      {
        link: 'https://open.spotify.com/artist/2AWF4fUAstzXyJd01JTuS3',
        icon: faSpotify,
      },
      {
        link: 'https://www.youtube.com/channel/UCh4HyUdUyM7Na3z_Ls-LmnA',
        icon: faYoutube,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Riki Biswas',
    description: [
      'Mr. Biswas is an alumnus of IITG and co-founder of numerous revolutionary companies, Pointo being one of them. Pointo provides an app-based e-rickshaw booking facility. Rodo, the brainchild of Mr. Biswas, is India’s FIRST dock-less public e-bicycle sharing service that aims for a cleaner, greener, hassle-free environment',
    ],
    shortDescription: 'Co-Founder & CEO of Pointo',
    speakerImage: SPEAKERS_EVENT_ONE.EIGHT,
    isLongCard: false,
    links: [
      {
        link: 'https://www.linkedin.com/in/riki-biswas-488ba2a0/',
        icon: faLinkedinIn,
      },
      {
        link: 'https://www.instagram.com/riki.biswas.iitg/?hl=en',
        icon: faInstagram,
      },
      {
        link: 'https://www.facebook.com/riki.biswas.52',
        icon: faFacebookF,
      },
    ],
  },
  {
    isPublished: true,
    name: 'Sabyasachi Patra',
    description: [
      'Mr. Patra is an ',
      { href: 'https://www.nitrkl.ac.in/', content: 'NIT Rourkela' },
      ' alumnus and did his Masters from ',
      { href: 'https://ximb.edu.in/', content: 'XIMB' },
      '. After years in corporate, he turned his life and started his filming company Wild Tiger Productions. He has been featured in press releases of Adobe Spark, ',
      {
        href: 'https://www.newindianexpress.com/education/edex/2014/jun/30/Preserving-Wildlife-his-Priority-630148.html',
        content: 'The New Indian Express',
      },
      ' to name a few.',
    ],
    shortDescription: 'Wildlife Filmographer | Engineer',
    speakerImage: SPEAKERS_EVENT_ONE.NINE,
    isLongCard: false,
    links: [
      {
        link: 'https://www.linkedin.com/in/sapatra/',
        icon: faLinkedinIn,
      },
      {
        link: 'https://www.instagram.com/indiawilds/',
        icon: faInstagram,
      },
      {
        link: 'https://www.facebook.com/riki.biswas.52',
        icon: faFacebookF,
      },
      {
        link: 'https://twitter.com/indiawilds',
        icon: faTwitter,
      },
      {
        link: 'https://www.indiawilds.com/',
        icon: faGlobe,
      },
    ],
  },
];

const SPEAKERS_EVENT_TWO = {
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
      { href: 'https://in.mashable.com/', content: 'Mashable' },
      'and ',
      { href: 'https://www.complex.com/', content: 'Complex' },
      ' magazine.',
    ],
    shortDescription: 'Filmmaker | Illusionist',
    speakerImage: SPEAKERS_EVENT_TWO.ONE,
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
    speakerImage: SPEAKERS_EVENT_TWO.TWO,
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
    speakerImage: SPEAKERS_EVENT_TWO.THREE,
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
    speakerImage: SPEAKERS_EVENT_TWO.FOUR,
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
    speakerImage: SPEAKERS_EVENT_TWO.FIVE,
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
    speakerImage: SPEAKERS_EVENT_TWO.SIX,
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
    speakerImage: SPEAKERS_EVENT_TWO.SEVEN,
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
    speakerImage: SPEAKERS_EVENT_TWO.EIGHT,
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
  GUESTS,
};
