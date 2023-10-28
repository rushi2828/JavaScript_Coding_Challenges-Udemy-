'strict mode';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
    `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdraw'} ${Math.abs(
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

// PIPELINE -  Chaining methods
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
console.log('=====');

///////////////////////////////////////
// Find method = Find exactly one element

const firstWithdraw = movements.find(mov => mov < 0);
console.log(firstWithdraw);
console.log('=====');

///////////////////////////////////////
// Some method
// Some = It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.

console.log(movements);
console.log(movements.includes(-130)); //true
console.log('=====');

const anyDeposits = movements.some(mov => mov < 0);
console.log(anyDeposits); //true
const anyDeposits1 = movements.some(mov => mov > 50000); //true
console.log(anyDeposits1); //false
console.log('=====');

// Every method
//  return true if all elements of an array are satisfied the condition

console.log(movements.every(mov => mov > 0)); //false
console.log('=====');

///////////////////////////////////////
// Flat and flatMap methods
// No callback functions

const ar = [[1, 2, 3], 4, 5, 6, [7, 8, 9]];
console.log(ar.flat()); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8];
console.log('=====');

///////////////////////////////////////
// flatMap methods
const arr4 = [1, 2, 1];

const result = arr4.flatMap(num => (num === 2 ? [2, 2] : 1));

console.log(result); //[1, 2, 2, 1]
console.log('=====');

///////////////////////////////////////
// sort methods - sorting based on Strings and if we used on number then it converts t string and then sort

const owners = ['rushi', 'pawan', 'tai', 'sandhya'];

console.log(owners.sort());

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

///////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits1, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits1' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits1, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
