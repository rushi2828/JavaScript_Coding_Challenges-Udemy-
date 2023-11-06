'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator

// Constructor Functions always start with capital letter
// Arrow function is not work as function constructor and that's because it doesn't have it's own 'this' keyword
// only funciton declaration and function expression

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //like above properties we can also add methods
  // // bad practise do not write method inside construcor for performance of code
  // this.calAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const person = new Person('Rushi', 1989);
console.log(person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const person1 = new Person('John', 1999); //Person {firstName: 'Rushi', birthYear: 1989}

const person2 = new Person('Tom', 1990);

console.log(person1, person2); //Person {firstName: 'John', birthYear: 1999} Person {firstName: 'Tom', birthYear: 1990}

// js doesn't have classes like java however we did create an object from constructor function like above person, person1 and person2

console.log(person instanceof Person); //true

const test = 'test';

console.log(test instanceof Person); // false
console.log('=========');
