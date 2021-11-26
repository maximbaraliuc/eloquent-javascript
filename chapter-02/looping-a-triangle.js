let pyramidBase;
let hashString = "";

// Creating a user interaction dialog box for base number. Dialog box disappears when number is introduced.
do {
  pyramidBase = Number(prompt("Pick a number for pyramid base length"));
} while (Number.isNaN(pyramidBase));

// let pyramidBase = 7;

while (hashString.length < pyramidBase) {
  hashString += "#"
  console.log(hashString)
}