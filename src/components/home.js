import BaseElement from '../utils/baseElement.js';
import { redirectTo } from '../utils/history.js';

class Home extends BaseElement {
  goSomewhere() {
    redirectTo('/jpt');
  }

  render() {
    return this.html`
      <h1>Vocab!</h1>
      <button onclick=${this.goSomewhere}>Go somewhere!</button>
    `;
  }
}

customElements.define('v-home', Home);
