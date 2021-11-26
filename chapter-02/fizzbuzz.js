// FIZZBUZZ //

/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible
by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

// Do the FizzBuzz for numbers in range 1-100.


for (let num = 1; num <= 100; num++) {
  let fbString = ""
  if (num % 3 == 0) {
    fbString += "Fizz"
  }
  if (num % 5 == 0) {
    fbString += "Buzz";
  }
  // The result is false if the argument is the empty String (its length is zero); otherwise the result is num
  console.log(fbString || num);
}

/* // FizzBuzz just for one number.
// Dialog box disappears when correct number (1 <= x <= 100) is introduced.

do {
  num = Number(prompt("Pick a number between 1 and 100"));
} while (num > 100 || num < 1); */