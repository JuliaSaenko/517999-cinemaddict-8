import {getRandomIntegerFromInterval} from './util.js';

const FILTERS = [
  {
    caption: `All movies`,
    filterId: `all`,
    isActive: true,
  },
  {
    caption: `Watchlist`,
    filterId: `watchlist`,
    amount: getRandomIntegerFromInterval(0, 10),
    isActive: false,
  },
  {
    caption: `History`,
    filterId: `history`,
    amount: getRandomIntegerFromInterval(1, 20),
    isActive: false,
  },
  {
    caption: `Favorites`,
    filterId: `favorites`,
    amount: getRandomIntegerFromInterval(0, 10),
    isActive: false,
  },
];

export {FILTERS};
