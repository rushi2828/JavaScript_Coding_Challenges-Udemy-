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

const rushi = new Person('Rushi', 1989);
console.log(rushi);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const john = new Person('John', 1999); //Person {firstName: 'Rushi', birthYear: 1989}

const tom = new Person('Tom', 1990);

console.log(john, tom); //Person {firstName: 'John', birthYear: 1999} Person {firstName: 'Tom', birthYear: 1990}

// js doesn't have classes like java however we did create an object from constructor function like above person, person1 and person2

console.log(rushi instanceof Person); //true

const test = 'test';

console.log(test instanceof Person); // false
console.log('=========');

///////////////////////////////////////
// Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// calAge() is created under [[Prototype]] : Object

rushi.calcAge(); //48
john.calcAge(); // 38

console.log(rushi);

console.log('=========');

console.log(rushi.__proto__);
console.log(rushi.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(rushi)); //true

console.log(Person.prototype.isPrototypeOf(Person)); //false
console.log('=========');

// height property is under prototype not like firstName
Person.prototype.height = 5.9;
console.log(rushi.hasOwnProperty('height')); //false
console.log(rushi.hasOwnProperty('firstName')); //true
console.log(rushi.height); //5.9

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(rushi.__proto__); //height: 5.9, calcAge: ƒ, constructor: ƒ}
// Object.prototype (top of prototype chain)
console.log(rushi.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(rushi.__proto__.__proto__.__proto__); //null

const arr = [3, 6, 6, 5, 6, 9, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true

// created unique function in prototype so all arrays can access unique property
// can not use ()=> because of arroow fn doesn't have it's own 'this'
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //[3, 6, 5, 9] return unique values

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // it's created under the prototye
  calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
}

const joe = new PersonCl('Joe Root', 1987);
console.log(joe);
joe.calcAge(); //50
joe.greet(); // Hey Joe Root

// 1. Classed are NOT hoisted i.e declare before use unlike function
// 2. Classed are also first-class citizensi.e pass that into functions and return from functions
// 3. Classes are executed in strict mode

///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //300

account.latest = 50;
console.log(account.movements); //[200, 530, 120, 300, 50]

///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); //
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35

console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
