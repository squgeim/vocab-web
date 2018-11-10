import Model from '../utils/model.js';

class History extends Model {
    constructor(...args) {
        super(...args);

        window.addEventListener('popstate', this.notifySubscribers);
    }

    get path() {
        return document.location.pathname;
    }

    get pageName() {
        return this.path.split('/').filter(v => v)[0] || 'index';
    }

    set path(path) {
        if (typeof path !== 'string') {
            throw new Error('path needs to be a string.');
        }

        history.pushState({}, '', path);
        this.notifySubscribers();
    }
}

export default new History();
