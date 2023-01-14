/* Understanding the sort() method */

/* alpha sort order */
const alphaArray = ['zebra', 'arial', 'medium'];
const alphaArray2 = ['zebra', 'arial', 'medium', 3, 1, 1000];

const alphaSort = (array) => {
  if (!array.length) return;
  return array.sort();
};

// console.log(alphaSort(alphaArray));
// console.log(alphaSort(alphaArray2));

/* Sort numbers accurately */
const arrayOfNumbers = [1, 1000, 21, 30, 4];

const numberSortAsc = (array) => {
  if (!array.length) return;
  return array.sort((a, b) => a - b);
};

// console.log(numberSortAsc(arrayOfNumbers));

/* Sort numbers in descending order */
const numberSortDesc = (array) => {
  if (!array.length) return;
  return array.sort((a, b) => a - b).reverse();
};

// console.log(numberSortDesc(arrayOfNumbers));

/* Sory an array of numbers AND strings */
const arrayNumAndStrings = [1, 1000, 21, 30, 4, 'zebra', 'abc', 'medium'];

const sortNumbersAndString = (array) => {
  if (!array.length) return;
  const numArray = [];
  const strArray = [];
  array.forEach((el) => {
    isNaN(el) ? strArray.push(el) : numArray.push(el);
  });
  strArray.sort();
  numArray.sort((a, b) => a - b);
  return [...numArray, ...strArray];
};

// console.log(sortNumbersAndString(arrayNumAndStrings));

/* Define a function that takes in an array of strings, and returns the monst commonly occuring string */
const arrayOfStrings = ['one', 'two', '3', 'one', 'one', 'two', 'one', 'one', 'two'];

// solution 1
const findMostCommonString = (array) => {
  if (!array.length) return;

  return array.sort((a, b) => array.filter((str) => str === a).length - array.filter((str) => str === b).length).pop();
};

// console.log(findMostCommonString(arrayOfStrings));
// downside to this solution: it modifies original array
// downside to this solution: it does not allow for ties

// solution 2
const findMostCommonStringNoMod = (array) => {
  if (!array.length) return;
  const newArray = [...array];
  return newArray.sort((a, b) => newArray.filter((str) => str === a).length - newArray.filter((str) => str === b).length).pop();
};

// console.log(findMostCommonStringNoMod(arrayOfStrings));
// downside to this solution: it does not allow for ties

// solution 3
const mostCommonWithTies = (array) => {
  if (!array.length) return;
  const countObj = {};

  array.forEach((el) => (countObj[el] ? (countObj[el] += 1) : (countObj[el] = 1)));

  const sortArray = [];
  Object.keys(countObj).forEach((key) => {
    sortArray.push([key, countObj[key]]);
  });

  sortArray.sort((a, b) => a[1] - b[1]);

  const highestCount = sortArray[sortArray.length - 1][1];

  // solution 3a: return original element and count
  // const resultArray = sortArray.filter((arr) => arr[1] === highestCount);

  // solution 3b: only returns the original element
  const resultArray = [];
  sortArray.forEach((arr) => {
    if (arr[1] === highestCount) resultArray.push(arr[0]);
  });

  return resultArray;
};

console.log(mostCommonWithTies(arrayOfStrings));
