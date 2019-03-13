import {createElement} from './util';

class Filter {
  constructor(data) {
    this._data = data;
  }

  render() {
    this._element = createElement(this.template);
    return this.element;
  }

  get element() {
    return this._element;
  }

  createFilter() {
    return this._data.map((it) => this.template(it));
  }

  get template() {
    return `<a href="#${this._caption.toLowerCase()}"
      class="main-navigation__item
      ${(this._active) ? `main-navigation__item--active` : ``}">
      ${this._caption}
      ${this._amount ? `<span class="main-navigation__item-count">${this._amount}</span>` : ` `}
    </a>`;
  }
}

export {Filter};
