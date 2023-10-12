'use strict';

/*
/////////////////////////////////////
DS-Sets
*/
// print unique values
const ordersSet = new Set(['pizza', 'pasta', 'pizza', 'burger', 'bread']);
console.log(ordersSet); //{'pizza', 'pasta', 'burger', 'bread'}
console.log('======');

console.log(new Set('rushi')); //{'r', 'u', 's', 'h', 'i'}
console.log('======');

console.log(ordersSet.size); //4
console.log('======');

console.log(ordersSet.has('pasta')); //true;
console.log('======');

console.log(ordersSet.has('cabage')); //false;
console.log('======');

console.log(ordersSet.add('toast')); // {'pizza', 'pasta', 'burger', 'bread', 'toast'}
console.log('======');

ordersSet.delete('toast');
console.log(ordersSet); //{'pizza', 'pasta', 'burger', 'bread'}
console.log('======');

//for of
for (const order of ordersSet) console.log(order);
/*  pizza
pasta
burger
bread
*/

// Convert array in set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //['Waiter', 'Chef', 'Manager']

/*
/////////////////////////////////////
DS-Map
*/
const rest = new Map();
rest.set(1, 'Classico Italiano');
rest.set('name', 'Italy hotel');
console.log(rest); //{1 => 'Classico Italiano', 'name' => 'Italy hotel'}
console.log(rest.set(2, 'Portugal')); //{1 => 'Classico Italiano', 'name' => 'Italy hotel', 2 => 'Portugal'}
console.log('======');

rest
  .set('categories', ['Italiano', 'Pizzaria', 'Vegetarian', 'organic'])
  .set('open', 11)
  .set('close', 20)
  .set(true, 'we are open :D')
  .set(false, ' we are close');

console.log(rest.get('name')); //Italy hotel
console.log(rest.get(true)); //we are open :D
console.log(rest.get(false)); // we are close
console.log('======');

const time = 14;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //we are open :D
console.log('======');

console.log(rest.has('close')); //true
console.log(rest.has('ose')); //false
console.log('======');

rest.delete(1);
console.log(rest); //{'name' => 'Italy hotel', 2 => 'Portugal', 'categories' => Array(4), 'open' => 11, 'close' => 20, …}
console.log('======');

console.log(rest.size); //7
console.log('======');

// array as key
// rest.set([1, 2], 'test');// it can be set but unable to retrive rest.get([1,2])

const arr = [1, 2];
rest.set('arr', 'test');

console.log(rest.get([1, 2])); //undefined
console.log(rest.get('arr')); // test
