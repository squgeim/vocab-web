import BaseElement from '../../utils/baseElement.js';

import { getRandomInt } from '../../utils/misc.js';

 const words = [
  "incessant",
  "pertinent",
  "exorbitant",
  "serendipitous",
  "apposite"
];

class SearchInput extends BaseElement {
  constructor() {
    super();

    this._callbacks = [];
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  set handleType(fn) {
    this._handleType = fn;
  }

  set handleReturn(fn) {
    this._handleReturn = fn;
  }

  handleKeyUp(e) {
    const value = e.target.value;
    if (e.key === "Enter") {
      e.target.value = '';
      return this._handleReturn(value);
    }

    return this._handleType(value);
  }

  get placeholderWord() {
    return words[getRandomInt(0, words.length)];
  }

  render() {
    this.html`
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
        onkeyup=${this.handleKeyUp}
        placeholder=${this.placeholderWord}
      ></input>
    `;
  }
}

customElements.define('v-search-input', SearchInput);
