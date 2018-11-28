import BaseElement from '../../utils/baseElement.js';
import Dictionary from '../../models/dictionary.js';

import '../navMenu/index.js';
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
          background: #202124;
          color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,.5);
          align-content: space-between;
          align-items: center;
          font-family: "PT Sans", sans-serif;
        }

        .logo {
          font-size: 24px;
          margin-left: 50px;
          display: flex;
          align-items: center;
          max-width: 150px;
          cursor: pointer;
          flex: 1;
        }
      </style>
      <div class="logo">
        vocab
      </div>
      <v-search-input
        name="text"
        handleType=${this.search}
        handleReturn=${this.handleReturn}
      ></v-search-input>
      <v-nav-menu></v-nav-menu>
    `;
  }
}

customElements.define('v-header', Header);
