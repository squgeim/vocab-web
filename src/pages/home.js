import BaseElement from '../utils/baseElement.js';
import { redirectTo } from '../utils/history.js';

import '../components/searchInput/index.js';

class Home extends BaseElement {
  goSomewhere() {
    redirectTo('/jpt');
  }

  render() {
    return this.html`
      <style>
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>
      <div class="wrapper">
        <h1>Vocab!</h1>
        <v-search-input></v-search-input>
      </div>
    `;
  }
}

customElements.define('page-home', Home);
