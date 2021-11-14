const createBody = (column1, column2, column3) => ({
  heading: column1,
  content: [column2, column3],
});

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
  SIZE,
};
