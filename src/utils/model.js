class Model {
  constructor(value) {
    this._subscribers = new Set();
    this.subscribe = this.subscribe.bind(this);
    this.notifySubscribers = this.notifySubscribers.bind(this);

    if (value !== undefined) {
      this._value = value;
      this._hasValue = true;
    }
  }

  set value(v) {
    if (!this._hasValue) {
      throw new Error();
    }

    this._value = v;
    this.notifySubscribers();
  }

  get value() {
    if (!this._hasValue) {
      throw new Error();
    }

    return this._value;
  }

  subscribe(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Callback needs to be a function.');
    }

    return this._subscribers.add(cb);
  }

  unsubscribe(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Callback needs to be a function.');
    }

    return this._subscribers.delete(cb);
  }

  notifySubscribers() {
    this._subscribers.forEach(cb => cb(this));
  }
}

export default Model;
