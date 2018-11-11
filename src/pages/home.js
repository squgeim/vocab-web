import BaseElement from '../utils/baseElement.js';

import Dictionary from '../models/dictionary.js';

import '../components/header/index.js';
import '../components/wordList/index.js';

class Home extends BaseElement {
  constructor() {
    super();

    this.subscribe(Dictionary, this.render.bind(this));
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
        <v-header></v-header>
        <v-word-list words=${Dictionary.list}></v-word-list>
      </div>
    `;
  }
}

customElements.define('page-home', Home);
