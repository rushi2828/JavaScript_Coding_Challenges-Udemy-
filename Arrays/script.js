'strict mode';

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2)); //['c', 'd', 'e']
// end parameter is not imcluded
console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(-2)); //['d', 'e']]
console.log(arr.slice(-1)); //['e']]

// using slice() methid for shallow copy of an array
console.log(arr.slice());
console.log('=========');

// splice method = deleted other array elements
// console.log(arr.splice(2)); //['c', 'd', 'e']

console.log(arr); //['a', 'b']
// removing last parameter
console.log(arr.splice(-1));
console.log(arr); //['a', 'b', 'c', 'd']
arr.splice(1, 2); //removing of position 1 and 2 i.e ['b', 'c']
console.log(arr); //['a', 'd']
console.log('=========');

// reverse
let arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2.reverse());
console.log('=========');

// concat method
let arr1 = ['a', 'b', 'c', 'd', 'e'];
const letters = arr1.concat(arr2);
console.log(letters); //['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']
console.log('=========');

// join
console.log(letters.join('-')); //a-b-c-d-e-j-i-h-g-f
console.log('=========');

// at
console.log(arr.at(0)); //a
console.log(arr2.at(0)); //j
console.log('=========');

///////////////////////////////////////
//Looping Arrays forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// positive values are deposited and negative value means withdraw

// approach # 1
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`Deposited : ${movement}`);
//   } else {
//     console.log(`Withdraw : ${Math.abs(movement)}`);
//   }
// }

// better way with numbers
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: Deposited : ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: Withdraw : ${Math.abs(movement)}`);
  }
}

console.log('=========');

// approach # 2 - simplest way with forEach with an array
// forEach function (current element, index , array) - positions does matter
// function (movement, i, arr)
// below we didnt use array so removed from param
movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: Deposited : ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: Withdraw : ${Math.abs(movement)}`);
  }
});
console.log('=========');

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach function(current_value, key, map)
// // below we didn't use map so removed from param
currencies.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});
console.log('=========');

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// here '_' means throw away param
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
console.log('=========');

///////////////////////////////////////
// Map method
// using above movements array i.e const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// arrow function for above function-
const movementsUsd = movements.map(mov => mov * euroToUsd);

console.log(movements);

console.log(movementsUsd); // [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
console.log('=========');

// diff way using with for
const movementsUsdfor = [];
for (const mov of movements) movementsUsdfor.push(mov * euroToUsd);

console.log(movementsUsdfor); //[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// map method also we userd like forEach function (current element, index , array)
// i.e map (current element, index , array)
const movementsDescription = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1}: Deposited : ${mov}`;
  } else {
    return `Movement ${i + 1}: Withdraw : ${Math.abs(mov)}`;
  }
});

console.log(movementsDescription);
console.log('=====');

// using abve function with turnary operator for code reduce purpose not related with map method just for using last learning chapters

const movementsDescription1 = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdraw'} : ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription1);
console.log('=====');

///////////////////////////////////////
// Filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits); //[200, 450, 3000, 70, 1300]

// other way - not usable

const depoistsOther = [];

for (const mov of movements) if (mov > 0) depoistsOther.push(mov);
console.log(depoistsOther); //[200, 450, 3000, 70, 1300]

const withdrawal = movements.filter(mov => mov < 0);

console.log(withdrawal); //[-400, -650, -130]
console.log('=====');

///////////////////////////////////////
// Reduce method - snow ball effect i.e adding all elements
//  (accumulator, currentValue, index , array)
/*
accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

array
The array reduce() was called upon.
*/
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i} : ${acc} `);
  return acc + cur;
}, 0);

// in arrow function above
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance); //3840

// calculate maximum number
const max = movements.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  } else return cur;
}, movements[0]);

console.log(max); //3000

console.log('=====');
