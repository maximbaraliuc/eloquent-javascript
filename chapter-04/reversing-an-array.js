// REVERSING ARRAYS //

/* Arrays have a `reverse` method that changes the array by inverting the order in which its elements appear.

For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`,
takes an array as argument and produces a new array that has the same elements in the inverse order.

The second, `reverseArrayInPlace`, does what the `reverse` method does: it *modifies* the array given as argument
by reversing its elements. Neither may use the standard `reverse` method.

Thinking back to the notes about side effects and pure functions in the previous chapter,
which variant do you expect to be useful in more situations? Which one runs faster?*/

function reverseArray(array) {
  let reversedA = [];
  for (let item of array) {
    reversedA.unshift(item);
  }
  return reversedA;
}

// Modify array with splice.
// Insert at position zero a copy of the current indexed item in array and delete it from the old place

function reverseArrayInPlace(list) {
  for (let index = 0; index < list.length; index++) {
    list.splice(0, 0, list[index]);
    list.splice(index + 1, 1);
  }
  return list;
}

// Your code above.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/* // SOLUTION IN THE BOOK //
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
} */