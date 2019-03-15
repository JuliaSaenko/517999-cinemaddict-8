import {render} from './util.js';
import {renderCards, cardsData} from './render-cards.js';
import {renderExtraRateCards, renderExtraCommentCards, extraCardsData} from './render-extra-card.js';

const mainFilter = document.querySelector(`.main-navigation`);
const cardsContainer = document.querySelector(`.films-list__container`);
const extrasRateContainer = document.querySelector(`#rate`);
const extrasCommentsContainer = document.querySelector(`#comments`);

const createFilterElement = (filter) => {
  const lowerFilterName = filter.caption.toLowerCase();

  return `<a href="#${lowerFilterName}"
            class="main-navigation__item
            ${(filter.active) ? `main-navigation__item--active` : ``}">
            ${filter.caption}
          ${filter.amount ? `<span class="main-navigation__item-count">${filter.amount}</span>` : ` `}
          </a>`;
};

const renderFilters = (filters) => {
  let content = ``;

  filters.forEach((filter) => {
    content += createFilterElement(filter);
  });

  render(mainFilter, content);

  mainFilter.addEventListener(`click`, onFilterClick);
};

const onFilterClick = (evt) => {
  evt.preventDefault();

  cardsContainer.innerHTML = ``;
  extrasRateContainer.innerHTML = ``;
  extrasCommentsContainer.innerHTML = ``;
  renderCards(cardsData);
  renderExtraRateCards(extraCardsData);
  renderExtraCommentCards(extraCardsData);
};

export {renderFilters};
