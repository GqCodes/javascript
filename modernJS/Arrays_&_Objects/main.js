// Array Literal
const numbers = [12, 45, 33, 29, 39];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Methods
const arr = [34, 21, 76, 59, 03];

arr.push(13);

arr.pop();

arr.unshift(99);

arr.shift();

arr.reverse();

// Challenge
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();
const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Objects
const library = [
  {
    title: 'Book Title',
    author: 'Book Author',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Book Title 2',
    author: 'Book Author 2',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Book Title 3',
    author: 'Book Author 3',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

console.log(firstBook);
