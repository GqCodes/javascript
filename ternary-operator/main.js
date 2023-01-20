/* Ternary Operator */
// a three part tool for making decisions with JS

// Syntax: shorthand for ifelse
// condition ? ifTrue : ifFalse;

/* EX 1: determine if there is soup today */
let soup = 'Chicken Noodle Soup';
let response = soup ? 'Yes we have soup today' : 'Sorry, no soup today';
console.log(response);
// in the example: if soup is defined the the response is "Yes we have soup today", BUT if soup is blank or undefined then the response would be "Sorry, no soup today"

// can also chain ternary operators as well

/*  Ex 2: building upon EX 1 */
let customerIsBanned = false;
let soupAccess = customerIsBanned ? 'Sorry no soup for you!' : soup ? `Yes, we have ${soup} today` : `Sorry no ${soup} today`;
console.log(soupAccess);

/* EX 3: find if something is free or not */
const subtotal = 10.0;
const isFree = true;
let total = isFree ? 0 : subtotal;

console.log(total);

/* EX 4 */
const student1 = {
  name: 'Mary',
  score: 90,
};
const student2 = {
  name: 'James',
  score: 70,
};

let passOrFail = (obj, min) => {
  obj.score >= min ? (obj.pass = true) : (obj.pass = false);
};
passOrFail(student2, 80);
console.log(student2);
