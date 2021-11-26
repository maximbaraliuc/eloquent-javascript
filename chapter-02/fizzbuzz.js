// Do the FizzBuzz for numbers in range 1-100.

for (let num = 1; num <= 100; num++) {
  if (num % 3 == 0) {
    if (num % 5 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Fizz")
    }
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}


/* // FizzBuzz just for one number.
// Dialog box disappears when correct number (1 <= x <= 100) is introduced.

do {
  num = Number(prompt("Pick a number between 1 and 100"));
} while (num > 100 || num < 1);

if (num % 3 == 0) {
  if (num % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log("Fizz")
  }
} else if (num % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(num);
} */