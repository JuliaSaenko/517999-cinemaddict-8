import {renderCards, getCardsData} from './render-cards.js';
import {renderExtraRateCards, renderExtraCommentCards, getExtraCardsData} from './render-extra-card.js';
import {Filter} from './filter';
import {statsInit} from './get-stat.js';
import moment from 'moment';
import {getDataForCard} from './data-for-card.js';

const STATS = document.querySelector(`.statistic`);
const FILMS = document.querySelector(`.films`);

const CARDS_COUNT = 7;

const cardsData = createData(CARDS_COUNT);

const filters = [
  {
    caption: `All movies`,
    filterId: `all`,
    amount: cardsData.length,
    isActive: true,
  },
  {
    caption: `Watchlist`,
    filterId: `watchlist`,
    amount: cardsData.filter((item) => item.isInWatchlist).length,
    isActive: false,
  },
  {
    caption: `History`,
    filterId: `history`,
    amount: cardsData.filter((item) => item.isWatched).length,
    isActive: false,
  },
  {
    caption: `Favorites`,
    filterId: `favorites`,
    amount: cardsData.filter((item) => item.isFavorite).length,
    isActive: false,
  },
];


const filter = new Filter(filters);

const filterData = (films, filterName) => {
  let filtredData = [];
  switch (filterName) {
    case `all`:
      return films;
    case `watchlist`:
      return films.filter((film) => film.isInWatchlist);
    case `history`:
      return films.filter((film) => film.isWatched);
    case `favorites`:
      return films;
    case `year`:
      const lastYear = moment().subtract(1, `year`);
      return films.filter((film) => film.watchedDate > lastYear);
    case `month`:
      const lastMonth = moment().subtract(1, `month`);
      return films.filter((film) => film.watchedDate > lastMonth);
    case `week`:
      const lastWeek = moment().subtract(1, `month`);
      return films.filter((film) => film.watchedDate > lastWeek);
    case `today`:
      const today = moment().startOf(`day`);
      return films.filter((film) => film.watchedDate > today);
    default:
      return filtredData;
  }
};


filter.onClick = (() => {
  const filtredData = filterData[filter.id]();

  renderCards(filtredData);
};


const filterTypes = {
  all: () => cardsData,
  watchlist: () => cardsData.filter((item) => item.isInWatchlist),
  history: () => cardsData.filter((item) => item.isWatched),
  favorites: () => cardsData.filter((item) => item.isFavorite)
};

function createData(count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(getDataForCard());
  }
  return result;
}

renderCards(getCardsData);
renderExtraRateCards(getExtraCardsData);
renderExtraCommentCards(getExtraCardsData);
