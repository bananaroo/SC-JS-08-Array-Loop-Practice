var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];
//ex.1
// stuff.forEach(function (item, index) {
//   if (index % 2 === 0) {
//     console.log(item);
//   }
// });

//ex.2
// var removeItem = function (array, item) {
//   var index = array.indexOf(item);
//   if (index === -1) {
//     console.log(`Sorry, item does not exist.`);
//   } else {
//     array.splice(index, 1);
//     console.log(`Removing ${item}`);
//   }
// };

// removeItem(stuff, "sky");
// console.log(stuff);
// removeItem(stuff, "brown");
// console.log(stuff);

//ex.3
// var filterStuff = stuff.filter(function (item) {
//   return item.includes("s");
// });
// console.log(filterStuff);

var newArray = [];
for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}
console.log(newArray);
