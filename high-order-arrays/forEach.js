/* forEach executes a given function on every element from an array */

let dwarves = ['Bifur', 'bofur', 'Bombur', 'Fili', 'Kili'];

dwarves.forEach((item, index, array) => {
  if (item === 'Bombur') {
    item.toUpperCase();
  } else {
    item.toLowerCase();
  }

  console.log(index, item);
});
