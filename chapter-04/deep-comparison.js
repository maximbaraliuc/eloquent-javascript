// DEEP COMPARISON //

/* The `==` operator compares objects by identity. But sometimes you’d prefer to compare
the values of their actual properties.

Write a function `deepEqual` that takes two values and returns true only if they are the same value
or are objects with the same properties, where the values of the properties are equal when compared
with a recursive call to `deepEqual`.

To find out whether values should be compared directly (use the `===` operator for that)
or have their properties compared, you can use the `typeof` operator. If it produces "`object`" for both values,
you should do a deep comparison. But you have to take one silly exception into account:
because of a historical accident, `typeof` null also produces "`object`".

The `Object.keys` function will be useful when you need to go over the properties of objects to compare them. */

// DEEP COMPARISON // Not fully resolved by myself. Found it hard to understand, had to look for solution.

function deepEqual(x, y) {
  if (x === y) return true;
  if (x == null || typeof x != "object" ||
    y == null || typeof y != "object") return false;

  let keysX = Object.keys(x),
    keysY = Object.keys(y);

  if (keysX.length != keysY.length) return false;

  for (let key of keysX) {
    if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
  }
  return true;
}

// Your code here.

let obj = {
  here: {
    is: "an"
  },
  object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
  here: 1,
  object: 2
}));
// → false
console.log(deepEqual(obj, {
  here: {
    is: "an"
  },
  object: 2
}));
// → true