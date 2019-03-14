import {ExtraCard} from './extra-card.js';
import {CardDetails} from './card-details.js';
import {getDataForCard} from './data-for-card.js';

const extraCardsData = [];
const extrasRateContainer = document.querySelector(`#rate`);
const extrasCommentsContainer = document.querySelector(`#comments`);

let exstrasNumber = 2;

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

    cardDetails.onClick = () => {
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

    cardDetails.onClick = () => {
      extrasCommentsContainer.removeChild(cardDetails.element);
      cardDetails.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  extrasCommentsContainer.appendChild(fragment);
};

for (let i = 0; i < exstrasNumber; i++) {
  extraCardsData.push(getDataForCard());
}

export {renderExtraRateCards, renderExtraCommentCards, extraCardsData};
