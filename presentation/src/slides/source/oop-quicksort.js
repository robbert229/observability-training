function quickSort(list, low, high) {
  let pivotIdx = 0;

  if (low < high) {
    pivotIdx = partition(list, low, high);

    quickSort(list, low, pivotIdx - 1);
    quickSort(list, pivotIdx + 1, high);
  }
}

function partition(list, low, high) {
  let pivot = list[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (list[j] <= pivot) {
      i++;
      swap(list, i, j);
    }
  }

  swap(list, i + 1, high);

  return i + 1;
}

function swap(list, a, b) {
  var temp = list[a];
  list.splice(a, 1, list[b]);
  list.splice(b, 1, temp);
}

const myList = [55, 4, 1, 3, 4, 5, 0, 199, 23, 54];
quickSort(myList, 0, myList.length - 1);
