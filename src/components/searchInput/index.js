import BaseElement from '../../utils/baseElement.js';
import Model from '../../utils/model.js';

import { getRandomInt } from '../../utils/misc.js';

class SearchInput extends BaseElement {
  constructor() {
    super();

    this.handleType = this.handleType.bind(this);
  }

  handleType(e) {
  }

  get placeholderWord() {
    const words = [
      "incessant",
      "pertinent",
      "exorbitant",
      "serendipitous",
      "apposite"
    ];
    
    return words[getRandomInt(0, words.length)];
  }

  render() {
    return this.html`
      <style>
        :host {
          display: block;
          width: 50%;
          margin: 0 auto;
        }
        .input {
          width: 100%;
          line-height: 50px;
          height: 50px;
          background: #fff;
          padding: 0 10px;
          box-shadow: #ccc 5px 5px 30px;
          border: none;
          font-family: inherit;
          font-size: inherit;
        }
      </style>

      <input
        type="text"
        class="input"
        onkeyup=${this.handleType}
        placeholder=${this.placeholderWord}
      ></input>
    `;
  }
}

customElements.define('v-search-input', SearchInput);
