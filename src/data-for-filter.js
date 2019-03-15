import {getRandomIntegerFromInterval} from './util.js';

const FILTERS = [
  {
    caption: `All movies`,
    active: true,
  },
  {
    caption: `Watchlist`,
    amount: getRandomIntegerFromInterval(0, 10),
  },
  {
    caption: `History`,
    amount: getRandomIntegerFromInterval(1, 20),
  },
  {
    caption: `Favorites`,
    amount: getRandomIntegerFromInterval(0, 10),
  },
];

export {FILTERS};
