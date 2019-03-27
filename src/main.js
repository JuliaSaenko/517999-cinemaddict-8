import {renderCards, cardsData} from './render-cards.js';
import {renderExtraRateCards, renderExtraCommentCards, extraCardsData} from './render-extra-card.js';
import {Filter} from './filter';
import {statsInit} from './get-stat.js';
import moment from 'moment';

const STATS = document.querySelector(`.statistic`);
const FILMS = document.querySelector(`.films`);
const mainFilter = document.querySelector(`.main-navigation`);
const cardsContainer = document.querySelector(`.films-list__container`);
const statsButton = document.querySelector(`[href*=stats]`);

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

const filterData = (filterType, cards) => {
  let filtredData = [];
  switch (filterType) {
    case `all`:
      return cards;
    case `watchlist`:
      return cards.filter((card) => card.isInWatchlist);
    case `history`:
      return cards.filter((card) => card.isWatched);
    case `favorites`:
      return cards;
    case `year`:
      const lastYear = moment().subtract(1, `year`);
      return cards.filter((card) => card.watchedDate > lastYear);
    case `month`:
      const lastMonth = moment().subtract(1, `month`);
      return cards.filter((card) => card.watchedDate > lastMonth);
    case `week`:
      const lastWeek = moment().subtract(1, `month`);
      return cards.filter((card) => card.watchedDate > lastWeek);
    case `today`:
      const today = moment().startOf(`day`);
      return cards.filter((card) => card.watchedDate > today);
    default:
      return filtredData;
  }
};

filter.onClick = (evt) => {
  const filterType = evt.target.hash;
  const filtredData = filterData(filterType, cardsData);
  cardsContainer.innerHTML = ``;
  renderCards(filtredData);
};

const onStatsButtonClick = (evt) => {
  evt.preventDefault();
  const active = mainFilter.querySelector(`.main-navigation__item--active`);
  active.classList.remove(`.main-navigation__item--active`);
  statsButton.classList.add(`.main-navigation__item--active`);
  FILMS.classList.add(`visually-hidden`);
  STATS.classList.remove(`visually-hidden`);
  statsInit(cardsData);
};

statsButton.addEventListener(`click`, onStatsButtonClick);

renderCards(cardsData);
renderExtraRateCards(extraCardsData);
renderExtraCommentCards(extraCardsData);

// Это варианты, которые я нашла для обрезки # Какой лучше?

// let a=document.URL
// a=a.replace('/#','');

// var str = "https://vk.com/photo11792890_264692886";
// var res = str.split("com/")

// string.match(/#.*$/)[0]
