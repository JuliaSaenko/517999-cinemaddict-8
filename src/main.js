import {renderFilters} from './make-filter.js';
import {renderCards, renderExtraCards} from './make-card.js';
import {getRandomInteger} from './util.js';

let cardsNumber = 7;
let exstrasNumber = 2;

const FILTERS = [
  {
    caption: `All movies`,
    active: true,
  },
  {
    caption: `Watchlist`,
    amount: getRandomInteger(0, 10),
  },
  {
    caption: `History`,
    amount: getRandomInteger(1, 20),
  },
  {
    caption: `Favorites`,
    amount: getRandomInteger(0, 10),
  },
];

renderFilters(FILTERS);
renderCards(cardsNumber);
renderExtraCards(exstrasNumber);
