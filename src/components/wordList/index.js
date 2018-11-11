import BaseElement from '../../utils/baseElement.js';

class WordList extends BaseElement {
  set words(words) {
    this._words = words;
    this.render();
  }

  get wordList() {
    return this._words ? this._words.map(w => `<li>${w}</li>`) : [];
  }

  render() {
    this.html`
      <style>
        :host {
          display: block;
          width: 100%;
        }
        ul li {
          display: inline-block;
          line-height: 25px;
          background: #f5f5f6;
          float: left;
          margin: 10px;
          padding: 10px 20px;
          cursor: pointer;
          transition: box-shadow 200ms;
        }
        ul li:hover {
          box-shadow: #00251a 0px 0px 1px;
        }
      </style>
      <ul>
        ${this.wordList}
      </ul>
    `;
  }
}

customElements.define('v-word-list', WordList);
