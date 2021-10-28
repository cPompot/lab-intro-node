class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    let newArray = this.items.sort(function (a,b) {
      if (a<b) return -1;
      if (b<a) return 1;
      if (a===b) return 0;
    })
    this.length = newArray.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds')
    };
    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
