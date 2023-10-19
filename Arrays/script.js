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
// // below we didnt use map so removed from param
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
