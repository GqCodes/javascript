/* Spread Operator */
// The ability to take an element and split it into individual elements or take a bunch of elements and combine them into a single array

/* EX 1 adding elements from 1 array into another array as individual elements broken out of it's original array */
let nums1 = [1, 2, 3];
let nums2 = [...nums1, 4, 5, 6];
console.log(nums2);

/* Ex 2 */
let beers = ['Blue Moon', 'Corona'];
let stuff = [22, 'Bob', true, beers];

// Spread - expands an array into single elements
myFunc(...stuff); //This would take stuff and break it up into single elements
function myFunc(age, name, isStudent) {
  console.log(`${name} is ${age}`);
}

function myFunc2(beerList) {
  let list = ['Kona', ...beerList, 'Heineken'];
  list.forEach((item, index) => console.log(index, item));
}
myFunc2(beers);

/* Rest Operator: works the opposite of spread. It essentially collects multiple elements and puts them all into a single element(array in the case below) */
function myOtherFunc(age, name, ...list2) {
  console.log(`${name} is ${age}`);
  list2.forEach((item, index) => console.log(index, item));
}
myOtherFunc(35, 'Waldo', 'some text', beers, stuff);

/* EX 3 suing spread with OBJECTS */
const ballPlayer = {
  name: 'Jalen Hurts',
  height: '6 ft',
  weight: '220 lbs',
  birthyear: '19bb',
};

const newBallPlayer = {
  ...ballPlayer,
  name: 'Jalen Clone',
};

console.log(newBallPlayer);
