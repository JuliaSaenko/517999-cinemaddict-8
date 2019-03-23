import {Card} from './card.js';
import {CardDetails} from './card-details.js';
import {getDataForCard} from './data-for-card.js';

const cardsContainer = document.querySelector(`.films-list__container`);
const getCardsData = [];

let cardsNumber = 7;

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
      newCard.comments = newObject.comments;
      newCard.isInWatchlist = newObject.isInWatchlist;
      newCard.isWatched = newObject.isWatched;
      newCard.isFavorite = newObject.isFavorite;

      newCard.update(newCard);
      cardsContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  cardsContainer.appendChild(fragment);
};

for (let i = 0; i < cardsNumber; i++) {
  getCardsData.push(getDataForCard());
}

export {renderCards, getCardsData};
