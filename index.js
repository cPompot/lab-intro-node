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

  max() {
    if (this.items.length<=0) {
      throw new Error('EmptySortedList')
    };
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length<=0) {
      throw new Error('EmptySortedList')
    };
    return Math.min(...this.items);
  }

  sum() {
    var sum = this.items.reduce(function (acc, el) {
      return acc += el
    }, 0);
    return sum;
  }

  avg() {}
}

module.exports = SortedList;
