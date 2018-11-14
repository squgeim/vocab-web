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
          background: #fff;
          float: left;
          margin: 10px;
          padding: 10px 20px;
          cursor: pointer;
          transition: box-shadow 200ms;
          border: 1px solid #dadce0;
          border-radius: 3px;
        }
        ul li:hover {
          background: #f8f9fa;
        }
      </style>
      <ul>
        ${this.wordList}
      </ul>
    `;
  }
}

customElements.define('v-word-list', WordList);
