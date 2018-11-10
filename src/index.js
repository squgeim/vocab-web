import BaseElement from './utils/baseElement.js';
import History from './models/history.js';
import './components/home.js';

class VocabApp extends BaseElement {
  constructor(...args) {
    super(...args);

    this.render = this.render.bind(this);
    this.subscribe(History, this.render);
  }

  get page() {
    switch (History.pageName) {
      case 'index':
        return this.html`<v-home></v-home>`;
      default:
        return this.html`<div>404!</div>`;
    }
  }

  render() {
    return this.page;
  }
}

customElements.define('vocab-app', VocabApp);
