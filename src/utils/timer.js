export default () => {
  const difference = +new Date(2022, 0, 8, 8, 0, 0) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  }

  return timeLeft;
};

export const getlength = (number) => number.toString().length;
