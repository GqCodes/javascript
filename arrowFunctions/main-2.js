/* The best feature about arrow functions is that they allow lexically binding the value of "this" so that it will refer to the object itself */

class Person {
  constructor(name) {
    this.name = name;
  }

  nameArrow() {
    setTimeout(() => {
      console.log(`Arrow: ${this.name}`);
    }, 1000);
  }
}

let person = new Person('chris');
person.nameArrow();

/* If using the standard function syntax, that function would not have access to the "this.name" */

/* Returning Objects */
let obj = {
  prop1: 'foo',
  prop2: 'bar',
};

const f1 = () => ({ prop1: 'foo', prop2: 'bar' });
// without the parenthesis that would error out because, it views the curlies as the wrapper around the code. To return an object it MUST have parenthesis around it
