import {Component} from './component.js';
import moment from 'moment';

class ExtraCard extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._rating = data.rating;
    this._releaseDate = data.releaseDate;
    this._duration = data.duration;
    this._genre = data.genre[0];
    this._poster = data.poster;
    this._description = data.description;
    this._comments = data.comments;

    this._isInWatchlist = data.isInWatchlist;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;

    this._element = null;
    this._onCommentClick = this._onCommentClick.bind(this);
  }

  get template() {
    return `<article class="film-card film-card--no-controls">
            <h3 class="film-card__title">${this._title}</h3>
            <p class="film-card__rating">${this._rating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${moment(this._releaseDate).year()}</span>
              <span class="film-card__duration">${moment.duration(this._duration).hours()}h&nbsp;${moment.duration(this._duration).minutes()}m</span>
              <span class="film-card__genre">${this._genre}</span>
            </p>
            <img src="./images/posters/${this._poster}" alt="" class="film-card__poster">
            <button class="film-card__comments">${this._commentsCountsTemplate()}</button>
          </article>`;
  }


  _onCommentClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  _commentsCountsTemplate() {
    return `${this._comments.length} comment${this._comments.length > 1 ? `s` : ``}`;
  }

  _updateCommentsCount() {
    this._element.querySelector(`.film-card__comments`).innerHTML = this._commentsCountsTemplate();
  }

  update(data) {
    this._userRating = data.userRating;
    this._comments = data.comments;
    this._isInWatchlist = data.isInWatchlist;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;
    this._updateCommentsCount();
  }

  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onCommentClick);
  }

  unbind() {
    this._element.querySelector(`.film-card__comments`).removeEventListener(`click`, this._onCommentClick);
  }
}

export {ExtraCard};
