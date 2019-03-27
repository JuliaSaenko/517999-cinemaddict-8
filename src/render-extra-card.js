import {ExtraCard} from './extra-card.js';
import {CardDetails} from './card-details.js';
import {getDataForCard} from './data-for-card.js';

const getExtraCardsData = [];
const extrasRateContainer = document.querySelector(`#rate`);
const extrasCommentsContainer = document.querySelector(`#comments`);

let EXTRA_CARDS_COUNT = 2;

const updateCard = (cards, i, newCard) => {
  cards[i] = Object.assign({}, cards[i], newCard);
  return cards[i];
};


const renderExtraRateCards = (array) => {
  let i = 0;
  const fragment = document.createDocumentFragment();

  while (i < array.length) {
    let newCard = new ExtraCard(array[i]);
    let cardDetails = new CardDetails(array[i]);

    newCard.onClick = () => {
      cardDetails.render();
      extrasRateContainer.appendChild(cardDetails.element);
    };

    cardDetails.onClick = (newObject) => {
      newCard.comments = newObject.comments;
      newCard.isInWatchlist = newObject.isInWatchlist;
      newCard.isWatched = newObject.isWatched;
      newCard.isFavorite = newObject.isFavorite;

      extrasRateContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  extrasRateContainer.appendChild(fragment);
};

const renderExtraCommentCards = (array) => {
  let i = 0;
  const fragment = document.createDocumentFragment();

  while (i < array.length) {
    let newCard = new ExtraCard(array[i]);
    let cardDetails = new CardDetails(array[i]);

    newCard.onClick = () => {
      cardDetails.render();
      extrasCommentsContainer.appendChild(cardDetails.element);
    };

    cardDetails.onClick = (newObject) => {
      newCard.comments = newObject.comments;
      newCard.isInWatchlist = newObject.isInWatchlist;
      newCard.isWatched = newObject.isWatched;
      newCard.isFavorite = newObject.isFavorite;

      extrasCommentsContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  extrasCommentsContainer.appendChild(fragment);
};

for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
  getExtraCardsData.push(getDataForCard());
}

function createData(count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(getDataForCard());
  }
  return result;
}

const extraCardsData = createData(EXTRA_CARDS_COUNT);

export {renderExtraRateCards, renderExtraCommentCards, extraCardsData};
