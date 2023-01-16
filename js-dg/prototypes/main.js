/* 
Prototypical Inheritance and the Prototype chain

- ES6 introduced classes which is the modern way to construct objetcs
- That said, prototypal inheritance and the prototype chain are:
  1) "under the hood", (es6 classes are considered "syntactic sugar")
*/

// Object literals
const person = {
  alive: true,
};

const musician = {
  plays: true,
};

musician.__proto__ = person;

console.log(musician);
console.log(musician.alive);

// JS has a getPrototypeOf and setPrototypeOf methods instead of using __proto__
Object.setPrototypeOf(musician, person); //this is like above with "musician.__proto__ = person"

console.log(musician.plays);
console.log(musician.alive);

// Extending the prototype chain => general to specific to more specific
const guitarist = {
  strings: 6,
  __proto__: musician,
};

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);

// The __proto__ value must be an object or null
// An object can only directly inherit from one object

// object with getter and setter methods
const car = {
  doors: 2,
  seats: 'vinyl',
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  },
};

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = 'leather'; // Note the keyword "this" when setting the seatMaterial, this refers to the current object we are using, or simply what is before the .seatMaterial
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);

// Walking up the chain - props and methods are not copied
console.log(luxuryCar.valueOf());

// getting the keys of an object
console.log(Object.keys(luxuryCar));
// loop through each object key
Object.keys(luxuryCar).forEach((key) => {
  console.log(key);
});
// But a for..in loop included inheritied props
for (let key in luxuryCar) {
  console.log(key);
}

/* OBJECT CONSTRUCTORS  */
function Animal(species) {
  (this.species = species), (this.eats = true);
}

Animal.prototype.walks = function () {
  return `A ${this.species} is walking.`;
};

const Bear = new Animal('bear');
console.log(Bear.species);
console.log(Bear.walks());
