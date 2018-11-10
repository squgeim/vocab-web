import BaseElement from '../../utils/baseElement.js';

class WordList extends BaseElement {
  set words(words) {
    this._words = words;
    this.render();
  }

  get wordList() {
    return this._words ? this._words.map(w => `<li>${w.word}</li>`) : [];
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
          line-height: 30px;
          background: rgba(255, 255, 255, 0.5);
          float: left;
          margin: 10px;
          padding: 10px;
          cursor: pointer;
          transition: box-shadow 500ms;
        }
        ul li:hover {
          box-shadow: #ccc 0 0 50px;
        }
      </style>
      <ul>
        ${this.wordList}
      </ul>
    `;
  }
}

customElements.define('v-word-list', WordList);
