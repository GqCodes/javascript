/* 
- Lexical scope defines how variable names are resolved in nested functions 
- Nested (child) functions have access to the scope of their parent functions
- This is often confused with closure, but lexical scope is only an important part of closure
*/

// Closure - is a function having access to the parent scope, even after the parent function has closed.
// A closure is created when we define a function, not when a function is executed.

let x = 1;

const parentFunction = () => {
  // local scope
  let myValue = 2;
  console.log(x);
  console.log(myValue);

  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };

  return childFunction;
};

const result = parentFunction();
console.log(result);

// has access to the myValue variable even though the parent function has been called AND closed. THIS is what makes it closure. In other words, closure is simply a nested function that has access to lexical and global scope even after the function has run, which without closure, wouldn't be possible.
result();

// IIFE (Immediately invoked function expressions)
const privateCounter = (() => {
  let count = 0;
  console.log(`initial value: ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();

privateCounter();

const credits = ((num) => {
  let credits = num;
  console.log(`initial credits value: ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0) console.log(`playing game, ${credits} credit(s) remaining`);
    if (credits <= 0) console.log('not enough credits');
  };
})(3);

credits();
credits();
credits();
