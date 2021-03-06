const makeData = (data) => {
  return {
    title: data.title,
    rating: data.rating,
    year: data.year,
    duration: data.duration,
    genre: data.genre,
    poster: data.poster,
    description: data.description,
    comments: data.comments
  };
};

const createCardElement = (card) => {
  return `<article class="film-card">
            <h3 class="film-card__title">${card.title}</h3>
            <p class="film-card__rating">${card.rating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${card.year}</span>
              <span class="film-card__duration">${card.duration}</span>
              <span class="film-card__genre">${card.genre}</span>
            </p>
            <img src="./images/posters/${card.poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${card.description}</p>
            <button class="film-card__comments">${card.comments}</button>

            <form class="film-card__controls">
              <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
              <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
              <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
            </form>
          </article>`;
};

const renderCards = (count, getDataForCard) => {
  let content = ``;

  let i = 0;

  while (i < count) {
    content += createCardElement(makeData(getDataForCard()));
    i++;
  }
  return content;
};

const createExtraCard = (card) => {
  return `<article class="film-card film-card--no-controls">
          <h3 class="film-card__title">${card.title}</h3>
          <p class="film-card__rating">${card.rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${card.year}</span>
            <span class="film-card__duration">${card.duration}</span>
            <span class="film-card__genre">${card.genre}</span>
          </p>
          <img src="./images/posters/${card.poster}" alt="" class="film-card__poster">
          <button class="film-card__comments">${card.comments}</button>
        </article>`;
};

const renderExtraRateCards = (count, getDataForCard) => {
  let content = ``;

  let i = 0;

  while (i < count) {
    content += createExtraCard(makeData(getDataForCard()));
    i++;
  }
  return content;
};

const renderExtraCommentsCards = (count, getDataForCard) => {
  let content = ``;

  let i = 0;

  while (i < count) {
    content += createExtraCard(makeData(getDataForCard()));
    i++;
  }
  return content;
};

export {renderCards, renderExtraRateCards, renderExtraCommentsCards};
