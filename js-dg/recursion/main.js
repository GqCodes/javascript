/* 
- Official definition of recursion: In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. 

- Unoffical definition: "Any situation where you do something, and depending on the results, you might do it again"

- Occurs when a function calls itselfs

- Any iterator function (aka function with a loop) can be recursive instead
*/

// iterator function
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

// countToTen();

/* 
recursive functions have 2 parts:
  1) the recursive call to the function
  2) at least one condition to exit
*/

const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};

recurToTen();

/* 
Reasons to use (not abuse) Recursion
  1) Less code
  2) Elegant code (aka pleasing to look at)
  3) Increased readability
*/

/* 
Reasons to NOT use recursion
  1) Performance
  2) Possibly more difficult to debug (aka follow the logic)
  3) Is the readability improved?
*/

// Fibonacci example without recursion
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

console.log(fibonacci(12));

// Fibonacci example WITH recursion
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};

console.log(fib(12));

// What number is in the nth position of the fibonacci sequence?

// Without Recursion:
const fibonacciPos = (pos) => {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
};

console.log(fibonacciPos(8));

//  with recursion
// const fibPos = (pos) => {
//   if (pos < 2) return pos;
//   return fibPos(pos - 1) + fibPos(pos - 2);
// };

const fibPos = (pos) => (pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2));

console.log(fibPos(8));
