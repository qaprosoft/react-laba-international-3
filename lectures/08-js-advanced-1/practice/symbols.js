// let id = Symbol('id');
// let id2 = 'id2';

// let user = {
//   name: 'Misha',
//   [id]: '1',
//   [id2]: '2',
// };

// console.log(user.hasOwnProperty('id3'));
// if (user.age) {
//   console.log(11111);
// }

// console.log(Boolean(user.name));

// //  third party library

// user['id2'] = 22;
// let id3 = Symbol('id');
// let id4 = Symbol.for('id');
// user['id'] = 11;
// user[id3] = 33;
// user[id4] = 44;

// // your
// console.log(user[id]);
// console.log(user['id']);
// console.log(user[id2]);
// console.log(user[id3]);
// console.log(user[id4]);
// console.log(user[id3]);
// console.log())

// let id = Symbol('id');
// let id2 = Symbol.for('id');
// let idCopy = Symbol.for('id');

// console.log(id2 == idCopy);

// const arr = [1, 2, 3, 4, 5];
// for (const iterator of arr) {
//   console.log(iterator);
// }

// for (const iterator in arr) {
//   console.log(iterator);
// }

// let user = {
//   name: 'Misha',
//   age: 29,
// };

// let user2 = new Map();
// user2.set('name', 'Sasha');
// user2.set(30, [user, { name: 'test' }]);
// console.log(user);
// console.log(user2);

// console.log(user2.get(30));
// console.log(user.age);

console.log(typeof new Set());
console.log(typeof new Map());
console.log(typeof new Array());
console.log(typeof new Date());

let game = {
  name: 'Dota 2',
  price: '$50',
};

console.log(typeof JSON.stringify(game));

console.log(Object.keys(game));
console.log(Object.values(game));
console.log(Object.entries(game));
console.log(new Date().getMonth());
