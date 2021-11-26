// LOOPING A TRIANGLE //

/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3

Most exercises contain a piece of code that you can modify to solve the exercise.
Remember that you can click code blocks to edit them. */

/* // Creating a user interaction dialog box for base number. Dialog box disappears when number is introduced.
let pyramidBase;
do {
  pyramidBase = Number(prompt("Pick a number for pyramid base length"));
} while (Number.isNaN(pyramidBase)); */

let hashString = "";
let pyramidBase = 7;

while (hashString.length < pyramidBase) {
  hashString += "#"
  console.log(hashString)
}