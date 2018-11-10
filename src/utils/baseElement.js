import Model from './model.js';

class BaseElement extends HTMLElement {
  constructor(...args) {
    super(...args);
    this._subscriptions = new Map();
    this.html = hyperHTML.bind(this);
  }

  connectedCallback() {
    this.render();

    this._subscriptions.forEach((cb, model) => {
        model.subscribe(cb);
    });
  }

  disconnectedCallback() {
    this._subscriptions.forEach((cb, model) => {
        model.unsubscribe(cb);
    });
  }

  subscribe(model, callback) {
    if (!(model instanceof Model)) {
      throw new Error("model should be an implementation of Model.");
    }

    if (typeof callback !== "function") {
      throw new Error("Callback should be a function");
    }

    this._subscriptions.set(model, callback);
  }

  render() {
    console.warn("You are supposed to override the render method!");
  }
}

export default BaseElement;
