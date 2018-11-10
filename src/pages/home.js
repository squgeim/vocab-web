import BaseElement from '../utils/baseElement.js';

import '../components/searchInput/index.js';

class Home extends BaseElement {
  constructor() {
    super();

    this.search = this.search.bind(this);
  }

  search(value) {
    console.log(value);
  }

  handleReturn(value) {
    console.log('enter!', value);
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
      </div>
    `;
  }
}

customElements.define('page-home', Home);
