import BaseElement from '../../utils/baseElement.js';

import Dictionary from '../../models/dictionary.js';

import '../searchInput/index.js';

class Header extends BaseElement {
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
        :host {
          display: flex;
          width: 100%;
          background: #fff;
          padding: 20px 0;
          box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
        }
      </style>
      <v-search-input
        name="text"
        handleType=${this.search}
        handleReturn=${this.handleReturn}
      ></v-search-input>
    `;
  }
}

customElements.define('v-header', Header);
