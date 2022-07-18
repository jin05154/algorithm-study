const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const k = array[0].split(" ")[1];
let list = array[1].split(" ");

function heapify(arr) {
  const length = arr.length;
  if (length <= 1) return;
  for (let i = Math.floor(length / 2); i >= 0; i--) {
    min_heapify(arr, i, length);
  }
}

function min_heapify(a, i, length) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let parent = i;

  if (left < length && a[left] < a[parent]) {
    parent = left;
  }

  if (right < length && a[right] < a[parent]) {
    parent = right;
  }

  if (i != parent) {
    swap(a, i, parent);
    console.log(a);
    min_heapify(a, parent, length);
  }
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function _delete(arr) {
  swap(arr, 0, arr.length - 1);
  const max = arr.pop();

  heapify(arr);
  return max;
}

heapify(list);

for (let i = 0; i < k - 1; i++) {
  _delete(list);
}

console.log(list[0]);

//
// function quickSort (array) {
//     if (array.length < 2) {
//             return array;
//         }
//     const pivot = [array[0]];
//     const left = [];
//     const right = [];
//     for (let i = 1; i < array.length; i++) {
//             if (array[i] < pivot) {
//                       left.push(array[i]);
//             } else if (array[i] > pivot) {
//                       right.push(array[i]);
//             } else {
//                       pivot.push(array[i]);
//             }  }
//     console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
//     return quickSort(left).concat(pivot, quickSort(right));
// }
