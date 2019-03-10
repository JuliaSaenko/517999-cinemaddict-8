import {renderFilters} from './make-filter.js';
import {getDataForCard} from './data-for-card.js';
// import {renderCards, renderExtraRateCards, renderExtraCommentsCards} from './make-card.js';
import {getRandomIntegerFromInterval} from './util.js';
import {Card, ExtraCard} from "./card";
import {CardDetails} from "./card-details.js";
// import {render} from './util.js';

const cardsContainer = document.querySelector(`.films-list__container`);

const extrasRateContainer = document.querySelector(`#rate`);
const extrasCommentsContainer = document.querySelector(`#comments`);

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
// render(cardsContainer, renderCards(cardsNumber, getDataForCard));
// render(extrasRateContainer, renderExtraRateCards(exstrasNumber, getDataForCard));
// render(extrasCommentsContainer, renderExtraCommentsCards(exstrasNumber, getDataForCard));

const getMoreCards = (count) => {
  let i = 0;
  const fragment = document.createDocumentFragment();


  while (count > i) {
    const getDataForCards = getDataForCard();
    const newCard = new Card(getDataForCards);
    const cardDetails = new CardDetails(getDataForCards);

    newCard.onClick = () => {
      cardDetails.render();
      cardsContainer.appendChild(cardDetails.element);
    };

    cardDetails.onClick = () => {
      cardsContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  cardsContainer.appendChild(fragment);
};


const getMoreExtraRateCards = (count) => {
  let i = 0;
  const fragment = document.createDocumentFragment();


  while (count > i) {
    const getDataForCards = getDataForCard();
    const newCard = new ExtraCard(getDataForCards);
    const cardDetails = new CardDetails(getDataForCards);


    newCard.onClick = () => {
      cardDetails.render();
      extrasRateContainer.appendChild(cardDetails.element);
    };

    cardDetails.onClick = () => {
      extrasRateContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  extrasRateContainer.appendChild(fragment);

};

const getMoreExtraCommentCards = (count) => {
  let i = 0;
  const fragment = document.createDocumentFragment();


  while (count > i) {
    const getDataForCards = getDataForCard();
    const newCard = new ExtraCard(getDataForCards);
    const cardDetails = new CardDetails(getDataForCards);


    newCard.onClick = () => {
      cardDetails.render();
      extrasCommentsContainer.appendChild(cardDetails.element);
    };

    cardDetails.onClick = () => {
      extrasCommentsContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  extrasCommentsContainer.appendChild(fragment);
};

getMoreCards(cardsNumber);
getMoreExtraRateCards(exstrasNumber);
getMoreExtraCommentCards(exstrasNumber);
