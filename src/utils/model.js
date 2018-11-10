class Model {
    constructor() {
        this._subscribers = new Set();
        this.subscribe = this.subscribe.bind(this);
        this.notifySubscribers = this.notifySubscribers.bind(this);
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
