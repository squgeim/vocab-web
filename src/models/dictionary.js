import Model from '../utils/model.js';

class Dictionary extends Model {
  constructor(storage, ...args) {
    super(...args);

    this.storage = storage;
    this.initList();

    this.addWord = this.addWord.bind(this);
  }

  initList() {
    this._isFetchingList = true;
    this._hasErrored = false;
    this.dictionary = this.storage.getItem('dictionary')
      .then(list => {
        this.syncDictionary = list;
      })
      .catch(err => {
        this._hasErrored = true;
        console.error(err);
        return [];
      })
      .finally(() => {
        this._isFetchingList = false;
      });
  }

  setActiveQuery(word) {
    this._activeQuery = word.toLowerCase();
    this.notifySubscribers();
  }

  addWord(word) {
    this.storage.setItem('dictionary', [
      ...this.syncDictionary,
      {
        word: word
      }
    ]).then(dict => {
      this.syncDictionary = dict;
    });
  }

  set syncDictionary(val) {
    this._syncDict = val;
    this.notifySubscribers();
  }

  get syncDictionary() {
    return this._syncDict || (this._syncDict = []);
  }

  get list() {
    return this._activeQuery
      ? this.syncDictionary.filter(
          w => w.word.toLowerCase().indexOf(this._activeQuery) > -1
        )
      : this.syncDictionary;
  }
}

const store = window.localforage.createInstance({
  name: 'vocab-dictionary',
});

export default new Dictionary(store);
