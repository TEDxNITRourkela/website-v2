/* eslint-disable max-len */

const SECTION = {
  ONE: {
    QUESTION: 'What is',
    HIGHLIGHT: 'TED',
    CONTENT:
      "TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.\n The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities. Follow TED on ",
    IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/about/ted_o42wz1.jpg',
    links: [
      {
        text: 'Twitter',
        link: 'http://twitter.com/TEDTalks',
      },
      {
        text: 'Facebook',
        link: 'http://www.facebook.com/TED',
      },
    ],
  },
  TWO: {
    QUESTION: 'What is',
    HIGHLIGHT: 'TEDx',
    CONTENT:
      'In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)',
    IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/about/people_fj226p.png',
    LINK: 'https://www.ted.com/tedx',
  },
};

const TEAM = {
  ROW1: [
    {
      NAME: 'Shobhit Parki',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/SobhitParki.jpeg',
      DESIGNATION: 'President',
    },
    {
      NAME: 'Rutaj Dash',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/RutajDash.jpeg',
      DESIGNATION: 'Vice-President',
    },
  ],
  ROW2: [
    {
      NAME: 'Lokesh Jain',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292331/team/ted_photo_acszjz.jpg',
      DESIGNATION: 'Chief Curator',
    },
    {
      NAME: 'Shrey Jha',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292328/team/Shrey_Jha_l9wrpe.jpg',
      DESIGNATION: 'Associate Curator',
    },
    {
      NAME: 'Sourav Priyadarsi',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643114951/team/design/Sourav_Priyadarsi_kqyooq.png',
      DESIGNATION: 'Chief Designer',
    },
    {
      NAME: 'Ritesh Patil',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/technical/RiteshPatil.jpeg',
      DESIGNATION: 'Tech Director',
    },
    {
      NAME: 'Prabhanshu Chaturvedi',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1627320450/team/curation/PrabhanshuChaturvedi.jpg',
      DESIGNATION: 'Managing Director',
    },
    {
      NAME: 'Spandan Patra',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292332/team/Spandan_Patra_gvjgg7.jpg',
      DESIGNATION: 'Deputy Managing Director',
    },
    {
      NAME: 'Aswathy Rajendran',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292328/team/Aswathy_Rajendran_ndhb0z.jpg',
      DESIGNATION: 'Director of Public Relations',
    },
    {
      NAME: 'Harsh Baid',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291384/team/pr/Harsh_Baid__ahpc7v.jpg',
      DESIGNATION: 'Director of Public Relations',
    },
  ],
  TECH: [
    {
      NAME: 'Ritesh Patil',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/technical/RiteshPatil.jpeg',
      DESIGNATION: 'Tech Director',
    },
    {
      NAME: 'Sambit Sankalp',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281545/team/technical/Sambit_Sankalp_omdbgy.png',
      DESIGNATION: 'Technical Team Member',
    },
    {
      NAME: 'Sonakshi Satpathy',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643198800/team/technical/Sonakshi_Satpathy_mujquq.png',
      DESIGNATION: 'Technical Team Member',
    },
    {
      NAME: 'Harshavardhan Reddy',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641303936/team/technical/harshavardhan_reddy_2021_dgqwiy.jpg',
      DESIGNATION: 'Technical Team Member',
    },
    {
      NAME: 'Ankush Lohani',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641303924/team/technical/Ankush_Lohani_bcyjio.jpg',
      DESIGNATION: 'Technical Team Member',
    },
  ],
  DESIGN: [
    {
      NAME: 'Sourav Priyadarsi',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643114951/team/design/Sourav_Priyadarsi_kqyooq.png',
      DESIGNATION: 'Chief Designer',
    },
    {
      NAME: 'Alok Kumar Gouda',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643081794/team/design/Alok_Kumar_Gouda_jludyf.png',
      DESIGNATION: 'Design Team Member',
    },
  ],
  MANAGEMENT: [
    {
      NAME: 'Prabhanshu Chaturvedi',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1627320450/team/curation/PrabhanshuChaturvedi.jpg',
      DESIGNATION: 'Managing Director',
    },
    {
      NAME: 'Spandan Patra',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292332/team/Spandan_Patra_gvjgg7.jpg',
      DESIGNATION: 'Deputy Managing Director',
    },
    {
      NAME: 'Ayush Jha',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291521/team/management/Ayush_Jha_ixsnp1.jpg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Sauraj Goswami',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643280989/team/management/Sauraj_Goswami_sbrfnt.png',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Shreejai Pati',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291519/team/management/Shreejai_pati_ME_purysn.png',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Smruti Smita Behera',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643081816/team/management/Smruti_Smita_Behera_azzpv3.png',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Samyak Prusty',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291519/team/management/Samyak_Prusty_wosp7m.jpg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Pranav Kumar Vaishnava',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643280956/team/management/Pranav_Kumar_Vaishnava_m6vuhd.png',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Sidarth Bhupalam',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643114506/team/management/Sidarth_Bhupalam_jaopcu.png',
      DESIGNATION: 'Management Team Member',
    },
  ],
  PR: [
    {
      NAME: 'Aswathy Rajendran',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292328/team/Aswathy_Rajendran_ndhb0z.jpg',
      DESIGNATION: 'Director of Public Relations',
    },
    {
      NAME: 'Harsh Baid',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291384/team/pr/Harsh_Baid__ahpc7v.jpg',
      DESIGNATION: 'Director of Public Relations',
    },
    {
      NAME: 'Harshi Singhi',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643094038/team/pr/Harshi_Singhi_sgvhdt.png',
      DESIGNATION: 'Public Relations Team Member',
    },
    {
      NAME: 'Tushar Goel',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281063/team/pr/Tushar_Goel_kzpenu.png',
      DESIGNATION: 'Public Relations Team Member',
    },
    {
      NAME: 'Ramya Marikukala',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643081860/team/pr/Ramya_b1hge3.png',
      DESIGNATION: 'Public Relations Team Member',
    },
    {
      NAME: 'Awantika Mallick',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291381/team/pr/Awantika_Mallick_mbnqc4.jpg',
      DESIGNATION: 'Public Relations Team Member',
    },
    {
      NAME: 'Animesh Tripathy',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291381/team/pr/Animesh_ygmnoc.jpg',
      DESIGNATION: 'Public Relations Team Member',
    },
    {
      NAME: 'Amit Kumar Dash',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641291381/team/pr/Amit_Kumar_Dash_ME_ib4kze.jpg',
      DESIGNATION: 'Public Relations Team Member',
    },
    {
      NAME: 'Berin Biju',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281053/team/pr/Berin_Biju_gvkx2e.png',
      DESIGNATION: 'Public Relations Team Member',
    },
  ],
  CURATION: [
    {
      NAME: 'Lokesh Jain',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292331/team/ted_photo_acszjz.jpg',
      DESIGNATION: 'Chief Curator',
    },
    {
      NAME: 'Shrey Jha',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641292328/team/Shrey_Jha_l9wrpe.jpg',
      DESIGNATION: 'Associate Curator',
    },
    {
      NAME: 'Promod Goyal',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641290764/team/curation/Pramod_Goyal_itzgal.jpg',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Rishita Singh',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641290763/team/curation/Rishita_Singh_xuvohy.jpg',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Yugesh Ramdhun',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1641290763/team/curation/Yugesh_Ramdhun_ulwd01.jpg',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Prerna Chordiya',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643280808/team/curation/Prerna_Chordiya_jzifsd.png',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Meghana Gajji',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643280800/team/curation/Meghana_nj0kcr.png',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Aditi Sitaula',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643280892/team/curation/Aditi_Sitaula_z0jvfr.png',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Krishnanshu Sharma',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643082058/team/curation/krishnanshu_qknhwu.png',
      DESIGNATION: 'Curation Team Member',
    },
  ],
};

const FAQ = [
  {
    QUESTION: 'What is TEDxNITRourkela?',
    ANSWER:
      "TEDxNITRourkela is an independently organized TED event coordinated and curated by a group of NIT Rourkela students. We present people with the opportunity to suggest innovative and efficient ideas to tackle our society's various issues, thus gathering a diverse range of voices from many disciplines that exist to help humanity grow. From essential, radical, and exciting ideas to electrifying performances from performers who are on top of their respective fields, we aspire to deliver to you an experience you would not want to miss.",
  },
  {
    QUESTION: 'When is TEDxNITRourkela being conducted?',
    ANSWER: 'The event is being conducted online on 13th and 14th of March 2021',
  },
  {
    QUESTION: 'Who are the speakers for TEDxNITRourkela?',
    ANSWER:
      '<ul><li>Pranav Khaitan:- An alumnus of NIT Rourkela and a member of the 2020 Nobel Peace price winning team, Senior Engineering lead at Google AI.</li></br><li>Lisa Russell:- Emmy award winner and an art curator in the UN and WHO.</li></br><li>Sabyasachi Patra:- Cinematographer and filmmaker, with multiple projects screened at major film festivals worldwide. He’s an alumnus of NIT Rourkela.</li></br><li>Lokesh K Gurram:- Co-founder at Ditto by Finshots and one of the sharpest financial brains of India.</li></br><li>Kabir Cafe:- Mumbai-based folk fusion band and their song ‘Mat Kar Maya ko Ahankar’ was featured in Scam1992.</li></br><li>Prof. Anup Nandy:- Researcher in ML and AI. He was one of the six scientists who represented India at the 5th BRICS Young Scientist Conclave-2020.</li></br><li>Jeremy Philemon:- One of the brains behind the covid19india.org initiative, with more than 1.75 billion hits on the website.</li></br><li>Ashwathy Satheesan:- Winner of the James Dyson award for her invention -Fleo; a stabilizing pen designed to help people with Parkinson’s.</li></br><li>Riki Biswas:- Co-founder of numerous revolutionary companies, Pointo, Rado, Solarstair etc.</li></ul>',
  },
  {
    QUESTION: 'Who’s organizing the event?',
    ANSWER:
      'TEDxNITRourkela is being organized by a group of passionate students with a drive to promote innovative and revolutionary ideas, in line with the TED mission- Ideas Worth Sharing.',
  },
  {
    QUESTION: 'Will it be an online event?',
    ANSWER:
      'Yes, keeping in mind everyone’s safety and social distancing guidelines due to the COVID19 pandemic, we are hosting the event virtually via AIRMEET.',
  },
  {
    QUESTION: 'How can I attend the event?',
    ANSWER:
      'You can book your seat in the tickets sections and join countless others on the 13th of March for an immensely global TEDx Experience.',
  },
  {
    QUESTION: 'What is the price of a single ticket?',
    ANSWER:
      'We are pricing the registration tickets at Rs. 199/-. Along with the ticket we have an optional Attendee Kit priced at Rs. 299/-',
  },
  {
    QUESTION: 'What is in the Attendee’s Kit?',
    ANSWER:
      'TEDxNITRourkela aims to deliver innovative and groundbreaking ideas that shape our future. To promote our environment’s sustainability and safety, our Attendee’s Kit features Eco-Friendly and Recyclable Calendars and/or Pens. Each month depicting the seasons in watercolor, the seed paper calendar has been made on paper resourced from waste cotton scraps and has seeds of various plants embedded in it. An eco-friendly alternative to an otherwise one-time use product, it is sustainable and carries life in it. When sowed into a flower pot, every leaf of the calendar grows into a beautiful plant, thus creating new life out of waste.',
  },
  {
    QUESTION: 'Why should I attend the event if it’s only virtual?',
    ANSWER:
      'TEDxNITRourkela is being hosted virtually via Airmeet. Airmeet is a premium all-in-one interactive platform for virtual events with a specially designed social longe to deliver a rich networking experience. Even in a virtual event, youtube to form real connection via meeting countless individuals across the globe, communicating with them in real-time.',
  },
  {
    QUESTION: 'How do I register for regular updates about TEDxNITRourkela?',
    ANSWER: 'You can register for our newsletter or follow us on our social media handles.',
  },
  {
    QUESTION: 'Do TEDx speakers or organizers get paid?',
    ANSWER:
      'No. TEDxNITRourkela is a student-run non-profit event. It is entirely a volunteer endeavor to bring innovative and revolutionary ideas under one roof.',
  },
];

export default {
  SECTION,
  TEAM,
  FAQ,
};
