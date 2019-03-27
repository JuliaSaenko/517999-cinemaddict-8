import {Card} from './card.js';
import {CardDetails} from './card-details.js';
import {getDataForCard} from './data-for-card.js';

const cardsContainer = document.querySelector(`.films-list__container`);
const getCardsData = [];

let CARDS_COUNT = 7;


const updateCard = (cards, i, newCard) => {
  cards[i] = Object.assign({}, cards[i], newCard);
  return cards[i];
};

const renderCards = (array) => {
  let i = 0;
  const fragment = document.createDocumentFragment();

  while (i < array.length) {
    let newCard = new Card(array[i]);
    let cardDetails = new CardDetails(array[i]);

    newCard.onClick = () => {
      cardDetails.render();
      cardsContainer.appendChild(cardDetails.element);
    };

    cardDetails.onClick = (newObject) => {
      const updatedCard = updateCard(cardsData, i, newObject);
      newCard.comments = newObject.comments;
      newCard.isInWatchlist = newObject.isInWatchlist;
      newCard.isWatched = newObject.isWatched;
      newCard.isFavorite = newObject.isFavorite;

      newCard.update(updatedCard);
      cardsContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    newCard.onAddToWatchList = (item) => {
      item.isInWatchlist = !item.isInWatchlist;
      cardDetails.update(item);
    };

    newCard.onMarkAsWatched = (item) => {
      item.isWatched = !item.isWatched;
      cardDetails.update(item);
    };

    newCard.onAddToFavorite = (item) => {
      item.isFavorite = !item.isFavorite;
      cardDetails.update(item);
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  cardsContainer.appendChild(fragment);
};

for (let i = 0; i < CARDS_COUNT; i++) {
  getCardsData.push(getDataForCard());
}

function createData(count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(getDataForCard());
  }
  return result;
}

const cardsData = createData(CARDS_COUNT);

export {renderCards, getCardsData, cardsData};
