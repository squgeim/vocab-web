import Model from '../utils/model.js';

class Dictionary extends Model {
  constructor(storage, ...args) {
    super(...args);

    this.dict = storage;
    this.initList();

    this.addWord = this.addWord.bind(this);
  }

  initList() {
    this._isFetchingList = true;
    this._hasErrored = false;
    this.dictionary = this.dict
      .keys()
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

  setActiveQuery(word = '') {
    this._activeQuery = word.toLowerCase();
    this.notifySubscribers();
  }

  addWord(word) {
    this.dict
      .setItem(
        word.toLowerCase(),
        {
          word: word,
        },
      )
      .then(this.initList);
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
          w => w.toLowerCase().indexOf(this._activeQuery) > -1
        )
      : this.syncDictionary;
  }
}

const store = window.localforage.createInstance({
  name: 'vocab-dictionary',
  storeName: 'dictionary',
  version: 3,
});

export default new Dictionary(store);
