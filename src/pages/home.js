import BaseElement from '../utils/baseElement.js';

import Dictionary from '../models/dictionary.js';

import '../components/searchInput/index.js';
import '../components/wordList/index.js';

class Home extends BaseElement {
  constructor() {
    super();

    this.search = this.search.bind(this);
    this.subscribe(Dictionary, this.render.bind(this));
  }

  search(value) {
    Dictionary.setActiveQuery(value);
  }

  handleReturn(value) {
    Dictionary.addWord(value);
    Dictionary.setActiveQuery();
  }

  render() {
    this.html`
      <style>
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>
      <div class="wrapper">
        <h1>Vocab!</h1>
        <v-search-input
          name="text"
          handleType=${this.search}
          handleReturn=${this.handleReturn}
        ></v-search-input>
        <v-word-list words=${Dictionary.list}></v-word-list>
      </div>
    `;
  }
}

customElements.define('page-home', Home);
