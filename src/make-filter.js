import {render} from '../src/util.js';
import {getRandomInteger} from '../src/util.js';
import {renderCards} from './make-card.js';

const mainFilter = document.querySelector(`.main-navigation`);
const cardsContainer = document.querySelector(`.films-list__container`);

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
  renderCards(getRandomInteger(1, 10));
};

export {renderFilters};
