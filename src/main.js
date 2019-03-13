import {Filter} from './filter.js';
import {FILTERS} from './data-for-filter.js';
import {renderCards, cardsData} from './render-cards.js';
import {renderExtraRateCards, renderExtraCommentCards, extraCardsData} from './render-extra-card.js';

const filter = new Filter(FILTERS);
filter.render();

renderCards(cardsData);
renderExtraRateCards(extraCardsData);
renderExtraCommentCards(extraCardsData);
