'use strict';

//default parameter

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LMN345'); //{flightNum: 'LMN345', numPassengers: 1, price: 199}
createBooking('TYU789', 2, 900); //{flightNum: 'TYU789', numPassengers: 2, price: 900}
createBooking('TYU789', undefined, 300); //{flightNum: 'TYU789', numPassengers: 1, price: 300}

//Passing arguments works: Values vs Reference
const flight = 'TRE34';
const rushi = {
  name: 'Rushikesh',
  passport: 'TRF3457',
};

const checkIn = function (flightNum, passengers) {
  flightNum = 'LKJ765';
  passengers.name = 'Mr. ' + passengers.name;

  //   if (passengers.passport === 'TRF3457') {
  //     alert('Checked in');
  //   } else {
  //     alert('wrong passport');
  //   }
  // };

  // checkIn(flight, rushi);
  // console.log(flight);
  // console.log(rushi);

  // const newPassport = function (person) {
  //   person.passport = Math.trunc(Math.random() * 100000000000);
};

// newPassport(rushi);
// checkIn(flight, rushi);

// IMP: JS does not have support passing by ref, only passing by value

/*
/////////////////////////////
The call and apply methods
*/

const airIndia = {
  airline: 'AirIndia',
  intacode: 'AI',
  bookings: [],
  book(filghtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight number ${this.intacode}-${filghtNum}`
    );
    bookings.push({ flight: `${this.intacode}${filghtNum}`, name });
  },
};

airIndia.book('239', 'Rushikesh');
console.log('======');
airIndia.book('123', 'Mike');
console.log('======');
console.log(airIndia);
console.log('======');

const jetAir = {
  airline: 'JetAirways',
  intacode: 'JA',
  booking: [],
};

const book = airIndia.book;

book.call(jetAir, '45', 'Tom');
console.log('======');

// Apply method -it's not using in modern JS
const flightData = [583, 'George Cooper'];
book.apply(jetAir, flightData);
console.log(jetAir);
console.log('======');
// modern JS it's used like above
book.call(jetAir, ...flightData);
console.log('======');

const swiss = {
  airline: 'Swiss Air Lines',
  intacode: 'LX',
  bookings: [],
};

// Bind method - applying bind method it's returned new function
// book.call(jetAir, '45', 'Tom');
const bookJA = book.bind(jetAir);
const bookSA = book.bind(swiss);
bookJA(23, 'Tulip Joshi'); //Tulip Joshi booked a seat on JetAirways flight number JA-23
console.log('======');
bookSA(45, 'Jenny Loafer'); //Jenny Loafer booked a seat on Swiss Air Lines flight number LX-45
console.log('======');

//partial applications- part of thh arguments original function of already applied which means already set

const bookSA33 = book.bind(swiss, 33); // 33 is the predefined

bookSA33('Yohsn Mot'); //Yohsn Mot booked a seat on Swiss Air Lines flight number LX-33
console.log('======');
bookSA33('Mark'); //Mark booked a seat on Swiss Air Lines flight number LX-33
console.log('======');

// Bind method with eventListners
airIndia.planes = 300;
airIndia.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', airIndia.buyPlane.bind(airIndia)); //using bind method because it returning a new function so in this line 'this' keyword poiting to airIndia

// Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 200)); // 240
console.log('======');

const addVAT = addTax.bind(null, 0.23); // it i simmilar to- addVAT = value => value + value * 0.23; '0.23' is predefined
console.log(addVAT(300)); // 369
console.log('======');

// function return function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //123
console.log(addVAT2(23)); //28.29
console.log('========');

/////////////////
/**
# Closures
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- A function has access to the variable environment og the execution context in which was created, even after that execution context is gone 
- variable environment attached to the function, exactly as it was at the time and place the function was created   
 */

const secureBooking = () => {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); //1
booker(); //2
booker(); //3
booker(); //4
booker(); //5
console.log('========');

// examples from MDN
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init(); // Mozilla
console.log('========');

// more examples on Closures
let f;
const g = () => {
  const a = 23;
  f = () => {
    console.log(a * 2);
  };
};

const h = () => {
  const b = 777;
  f = () => {
    console.log(b * 2);
  };
};

g();
f();
// for above output is 46

// Reassinging function
h();
f();
// for above output is 1554

console.log('====');
// real use case example
const boardPassengers = function (n, wait) {
  // const perGroup = n / 3;
  setTimeout(() => {
    console.log(`We are boarding now ${n} pasengers`);
    console.log(`There are 3 groups, each group with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will satrt onboarding in ${wait} seconds`);
};

let perGroup = 1000; // here if we comment perfGroup variable from function then this global value will assign to perGroup
boardPassengers(180, 3);

// after global value assigned to the above i.e let perGroup = 1000; then output will be
/*
 Will satrt onboarding in 3 seconds

 We are boarding now 180 pasengers
 There are 3 groups, each group with 1000 passengers
*/
