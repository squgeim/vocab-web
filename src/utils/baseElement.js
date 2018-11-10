import Model from './model.js';

class BaseElement extends HTMLElement {
  get subscriptions() {
    return this._subscriptions || (this._subscriptions = new Map());
  }

  get html() {
    return (
      this._html ||
      (this._html = hyperHTML.bind(this.attachShadow({ mode: 'open' })))
    );
  }

  connectedCallback() {
    this.render();

    this.subscriptions.forEach((cb, model) => {
      model.subscribe(cb);
    });
  }

  disconnectedCallback() {
    this.subscriptions.forEach((cb, model) => {
      model.unsubscribe(cb);
    });
  }

  subscribe(model, callback) {
    if (!(model instanceof Model)) {
      throw new Error('model should be an implementation of Model.');
    }

    if (typeof callback !== 'function') {
      throw new Error('Callback should be a function');
    }

    this.subscriptions.set(model, callback);
  }

  render() {
    console.warn('You are supposed to override the render method!');
  }
}

export default BaseElement;
