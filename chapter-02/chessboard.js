// CHESSBOARD //

/* Write a program that creates a string that represents an 8counter8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a # character. The characters should form a chessboard.

When you have a program that generates this pattern, define a binding size = 8
and change the program so that it works for any size, out, putting a grid of
the given width and height.*/


/* // Size by user input.(Works in the browser)
let size;
do {
  size = Number(prompt("Enter the grid size"))
} while (Number.isNaN(size)); */

// Initialization.
let size = 10;
let bwCheck = 1;
let grid = "";

for (let counter = 1; counter < (size * size); counter++) {
  // Even or odd relates to black or white ("#", " "). Starts with white.
  if (bwCheck % 2 == 0) {
    grid += "#";
  } else {
    grid += " ";
  }
  bwCheck++;

  // Checks if to break line. Next bwCheck depends if size is even or odd.
  if (counter % size == 0) {
    if (size % 2 == 0) {
      grid += "\n";
      bwCheck++;
    } else {
      grid += "\n";
    }
  }
}
console.log(grid);