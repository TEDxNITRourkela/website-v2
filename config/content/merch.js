/* eslint-disable max-len */
const createBody = (column1, column2, column3) => ({
  heading: column1,
  content: [column2, column3],
});

const MERCH = [
  {
    name: 'The NITR @ 60 Tee',
    imageUrl:
      'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/merchandise/NITR_60_1_bkovwe.jpg',
    description: 'Flaunt the SEXAGENARION legacy of NITR with this cool NITR@60 Black Tee.',
    price: '349',
    discountedPrice: '299',
    tshirtCode: 'nitr60',
  },
  {
    name: 'The Class-X of 2021',
    imageUrl:
      'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/merchandise/Class_Of_2021_jg3wn4.jpg',
    description:
      'Celebrate your adventurous journey with this classy CLASS OF 2021 Tee, and cherish the wonderful memories.',
    price: '399',
    discountedPrice: '349',
    tshirtCode: 'classof2021',
  },
  {
    name: 'The X-Treme Tee',
    imageUrl:
      'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/merchandise/X_factor_2_muxcy2.jpg',
    description:
      'Add a WOW factor to your wardrobe with this cool X-TREME Tee, and flaunt that fresh design!',
    price: '399',
    discountedPrice: '349',
    paymentLink:
      'https://studentactivitycenter.stores.instamojo.com/product/291810/the-x-treme-tee-tedxnitrourkela/',
    dataID: '291810',
    tshirtCode: 'xtreme',
  },
];

const SIZE = {
  title: 'Size Chart',
  headings: ['Size', 'Chest', 'Length'],
  body: [
    createBody('S', '36', '26'),
    createBody('M', '38', '27'),
    createBody('L', '40', '28'),
    createBody('XL', '42', '29'),
    createBody('XXL', '44', '30'),
  ],
};

export default {
  MERCH,
  SIZE,
};
