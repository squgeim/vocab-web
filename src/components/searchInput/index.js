import BaseElement from '../../utils/baseElement.js';

import { getRandomInt } from '../../utils/misc.js';

const words = [
  'incessant',
  'pertinent',
  'exorbitant',
  'serendipitous',
  'apposite',
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
    if (e.key === 'Enter') {
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
          background: rgba(255,255,255,0.8);
          padding: 0 10px;
          box-shadow: #00251a 1px 1px 2px;
          border: none;
          font-family: inherit;
          font-size: inherit;
          transition: all 500ms;
        }
        .input:focus {
          background: #fff;
        }
      </style>

      <input
        type="text"
        class="input"
        autofocus="true"
        onkeyup=${this.handleKeyUp}
        placeholder=${`Type something. Maybe, ${this.placeholderWord}?`}
      ></input>
    `;
  }
}

customElements.define('v-search-input', SearchInput);
