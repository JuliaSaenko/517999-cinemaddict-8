import {render} from '../src/util.js';

const cardsContainer = document.querySelector(`.films-list__container`);
const extrasContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

const createCardElement = () => {
  return `<article class="film-card">
            <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
            <p class="film-card__rating">9.8</p>
            <p class="film-card__info">
              <span class="film-card__year">2018</span>
              <span class="film-card__duration">1h&nbsp;13m</span>
              <span class="film-card__genre">Comedy</span>
            </p>
            <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
            <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
            <button class="film-card__comments">13 comments</button>

            <form class="film-card__controls">
              <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
              <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
              <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
            </form>
          </article>`;
};

const renderCards = (count) => {
  let content = ``;

  let i = 0;

  while (i < count) {
    content += createCardElement();
    i++;
  }
  render(cardsContainer, content);
};

const createExtraCard = () => {
  return `<article class="film-card film-card--no-controls">
          <h3 class="film-card__title">Incredibles 2</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/fuga-da-new-york.jpg" alt="" class="film-card__poster">
          <button class="film-card__comments">13 comments</button>
        </article>`;
};

const renderExtraCards = (count) => {
  let content = ``;

  let i = 0;

  while (i < count) {
    content += createExtraCard();
    i++;
  }
  render(extrasContainer, content);
};

export {renderCards, renderExtraCards};