## Chapter 05 Higher-order Functions

## Exercises

### Flattening

Use the reduce method in combination with the `concat` method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

```javascript
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
```

### Your own loop

Write a higher-order function `loop` that provides something like a `for` loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.

```javascript
// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
```

### Everything

Analogous to the `some` method, arrays also have an `every` method. This one returns true when the given function returns true for *every* element in the array. In a way, `some` is a version of the `||` operator that acts on arrays, and `every` is like the `&&` operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

```javascript
function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
```

<details>
<summary>Display hints...</summary>
<p>

Like the <code>&&</code> operator, the <code>every</code> method can stop evaluating further elements as soon as it has found one that doesn’t match. So the loop-based version can jump out of the loop—with <code>break</code> or <code>return</code>—as soon as it runs into an element for which the predicate function returns false. If the loop runs to its end without finding such an element, we know that all elements matched and we should return true.

To build <code>every</code> on top of <code>some</code>, we can apply <em>De Morgan’s laws</em>, which state that <code>a && b</code> equals <code>!(!a || !b)</code>. This can be generalized to arrays, where all elements in the array match if there is no element in the array that does not match..
</p>
</details>

### Dominant writing direction

Write a function that computes the dominant writing `direction` in a string of text. Remember that each script object has a direction property that can be "`ltr`" (left to right), "`rtl`" (right to left), or "`ttb`" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The `characterScript` and `countBy` functions defined earlier in the chapter are probably useful here.

```javascript
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
```

<details>
<summary>Display hints...</summary>
<p>

Your solution might look a lot like the first half of the <code>textScripts</code> example. You again have to count characters by a criterion based on <code>characterScript</code> and then filter out the part of the result that refers to uninteresting (script-less) characters.

Finding the direction with the highest character count can be done with <code>reduce</code>. If it’s not clear how, refer to the example earlier in the chapter, where <code>reduce</code> was used to find the script with the most characters.
</p>
</details>




