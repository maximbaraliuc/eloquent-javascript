// CHAPTER'S PROJECT CODE (TRY AND ERROR PURPOSE) //

let journal = [{
    events: ["work", "touched tree", "pizza",
      "running", "television"
    ],
    squirrel: false
  },
  {
    events: ["work", "ice cream", "cauliflower",
      "lasagna", "touched tree", "brushed teeth"
    ],
    squirrel: false
  },
  {
    events: ["weekend", "cycling", "break", "peanuts",
      "beer"
    ],
    squirrel: true
  },
  /* and so on... */
];

let journal = [];

function addEntry(events, squirrel) {
  journal.push({
    events,
    squirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running",
  "television"
], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
  "touched tree", "brushed teeth"
], false);
addEntry(["weekend", "cycling", "break", "peanuts",
  "beer"
], true);

console.log(journal);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434