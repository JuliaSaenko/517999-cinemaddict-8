import {renderFilters} from './make-filter.js';
import {getDataForCard} from './data-for-card.js';
import {renderCards, renderExtraRateCards, renderExtraCommentsCards} from './make-card.js';
import {getRandomIntegerFromInterval} from './util.js';

let cardsNumber = 7;
let exstrasNumber = 2;

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

renderFilters(FILTERS);
renderCards(cardsNumber, getDataForCard);
renderExtraRateCards(exstrasNumber, getDataForCard);
renderExtraCommentsCards(exstrasNumber, getDataForCard);
