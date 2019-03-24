import {Component} from './component';

class Filter extends Component {
  constructor(filters) {
    super();
    this._list = filters;

    this._onClick = filters.onClick;
  }

  get element() {
    return this._element;
  }

  get template() {
    return `<nav class="main-navigation">
      ${this._items.map((it) => `
        <a href="#${it._caption.toLowerCase()}"
          class="main-navigation__item
          ${(it._active) ? `main-navigation__item--active` : ``}">
          ${it._caption}
          ${it._amount ? `<span class="main-navigation__item-count">${it._amount}</span>` : ` `}
        </a>`)}
  </nav>`;
  }

  bind() {
    this.element.querySelector(`.main-navigation`).addEventListener(`click`, this._onFilterClick);
  }

  _onFilterClick(evt) {
    if (evt.target.nodeName === `A`) {
      this._onClick(evt.target.hesh);
    }
  }
}
export {Filter};
