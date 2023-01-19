const items = [
  { name: 'bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

/*========== FILTER ==========*/
// returns a new array of the filtered data
// filter out everything that is <= 100
const filteredItems = items.filter((item) => {
  //a new array will be returned based on a true/false condition:
  return item.price <= 100;
});

console.log(filteredItems);

/*========== MAP ==========*/
// returns a new array of specific data from another array ex: (name, price etc...)
const itemName = items.map((item) => {
  return item.name;
});

console.log(itemName);

/*========== FIND ==========*/
// allows you to find a single object in an array. returns the first item found that is true based on the condition
const findItem = items.find((item) => {
  return item.name === 'Book';
});

console.log(findItem);

/*========== FOREACH ==========*/
// for every single element in an array, do whats stated in the function
items.forEach((item) => {
  console.log(item.name);
});

/*========== SOME ==========*/
// checks to see if anything in a array returns true or false
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

/*========== EVERY ==========*/
// similar to some, BUT checks if EVERY item is true or false NOT just some or one
const everyItemInexpensive = items.every((item) => {
  return item.price <= 100;
});
console.log(everyItemInexpensive); //this would be false because there are items more than 100

/*========== REDUCE ==========*/
// runs a function on every single item in an array.
// takes in an element AND what we what to reduce everything into, for ex currentTotal.
// also takes in a starting point paramenter after the ending curly
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

/*========== INCLUDES ==========*/
// this doesn't take a function, it takes a single argument
const items2 = [1, 2, 3, 4, 5];
const includedsItem = items2.includes(2);
console.log(includedsItem);
