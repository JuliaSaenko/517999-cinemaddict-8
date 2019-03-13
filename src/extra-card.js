import {MINUTES_IN_HOUR, createElement} from './util';

class ExtraCard {
  constructor(data) {
    this._title = data.title;
    this._rating = data.rating;
    this._year = data.year;
    this._duration = data.duration;
    this._genre = data.genre;
    this._poster = data.poster;
    this._description = data.description;
    this._comments = data.comments;

    this._element = null;
    this._onCommentClick = this._onCommentClick.bind(this);
  }

  get _hours() {
    return Math.floor(this._duration / MINUTES_IN_HOUR);
  }

  get _minutes() {
    return this._duration - this._hours * MINUTES_IN_HOUR;
  }

  get template() {
    return `<article class="film-card film-card--no-controls">
            <h3 class="film-card__title">${this._title}</h3>
            <p class="film-card__rating">${this._rating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${this._year}</span>
              <span class="film-card__duration">${this._duration}</span>
              <span class="film-card__genre">${this._genre}</span>
            </p>
            <img src="./images/posters/${this._poster}" alt="" class="film-card__poster">
            <button class="film-card__comments">${this._comments}</button>
          </article>`;
  }


  _onCommentClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  get element() {
    return this._element;
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onCommentClick);
  }

  unbind() {
    this._element.querySelector(`.film-card__comments`).removeEventListener(`click`, this._onCommentClick);
  }

  render() {
    this._element = createElement(this._template);
    this.bind();
    return this._element;
  }

  unRender() {
    this.unbind();
    this._element = null;
  }
}

export {ExtraCard};
