// A LIST //
/*
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

Write a function `arrayToList` that builds up a list structure like the one shown
when given `[1, 2, 3]` as argument. Also write a `listToArray` function that produces an array
from a list. Then add a helper function `prepend`, which takes an element and a list and creates
a new list that adds the element to the front of the input list, and `nth`, which takes a list and
a number and returns the element at the given position in the list (with zero referring to the first element)
or `undefined` when there is no such element. If you haven’t already, also write a recursive version of `nth`. */

// ARRAY TO LIST - OPTIMIZED
function arrayToList(array) {
  // rList will include itself in form of "rest" value.
  let rList = null;
  for (let ind = array.length - 1; ind >= 0; ind--) {
    rList = {
      value: array[ind],
      rest: rList
    }
  }
  return rList;
}

// LIST TO ARRAY
function listToArray(list) {
  let rArray = [];
  let entry = list;
  // "entry" check stops when it reaches "null"
  while (entry) {
    rArray.push(entry.value);
    entry = entry.rest;
  }
  return rArray;
}

// HELPER FUNCTION
function prepend(item, list) {
  let resultList = {
    value: item,
    rest: list
  };
  return resultList;
}

// RECURSIVE (EXTRA TASK)
function nth(list, num) {
  let iterList = list;
  if (num == 0) {
    return iterList.value;
  } else if (!iterList) {
    return undefined;
  } else {
    return nth(list.rest, num - 1)
  }
}
// Your code above.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20