import {MINUTES_IN_HOUR, createElement} from './util';

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._element = null;
    this._onClick = null;
  }

  get _hours() {
    return Math.floor(this._duration / MINUTES_IN_HOUR);
  }

  get _minutes() {
    return this._duration - this._hours * MINUTES_IN_HOUR;
  }


  get element() {
    return this._element;
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  bind() {}

  unbind() {}

  unRender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }
}

export {Component};
