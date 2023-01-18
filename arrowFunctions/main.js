/* Working with Arrow Functions */

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

const isPositive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

const randomNumber2 = () => Math.random;

document.addEventListener('click', function () {
  console.log('click');
});

document.addEventListener('click', () => console.log('click'));

let add = function (a, b) {
  let sum = a + b;
  console.log(sum);
  return false;
};

const add2 = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
};
