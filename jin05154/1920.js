const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arrA = input[1].split(" ");
const arrNums = input[3].split(" ");

class hashTable {
  constructor() {
    this.table = new Array(70000);
    this.size = 0;
  }

  // _ to indicate that it's a private class
  _hash(key) {
    return parseInt(key) % this.table.length;
  }

  // insert data
  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) this.table[index] = [];
    this.table[index].push([key, value]);
    this.size++;
  }

  // search data
  get(key) {
    let index = this._hash(key);
    if (!this.table[index]) return 0;
    else {
      let count = 0, result = 0;
      while (count < this.table[index].length) {
        if (this.table[index][count][0] === key) {
          result = 1;
          break;
        }
        count++;
      }
      return result;
    }
  }
}

const hash = new hashTable();
const answer = [];

arrA.forEach((item) => {
  hash.set(item.trim(), parseInt(item.trim()));
});

arrNums.forEach((item) => {
  answer.push(hash.get(item.trim()));
});

console.log(answer.join("\n"));
