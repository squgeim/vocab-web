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
      <ul>
        ${this.wordList}
      </ul>
    `;
  }
}

customElements.define('v-word-list', WordList);
