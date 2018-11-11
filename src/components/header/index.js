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
          background: #004d40;
          color: #fff;
          padding: 20px;
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

customElements.define('v-header', Header)
