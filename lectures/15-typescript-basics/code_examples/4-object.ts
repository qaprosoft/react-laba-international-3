// object - built in type in ts
const person: object = {
  name: 'John',
  age: { a: '213', b: [true, 1] },
};
console.log('person', person);

const person1: {
  name: string;
  age?: number; // optional
} = {
  name: 'John',
  age: 22,
};

console.log(person1.name);
// person1.test = 123; // error

type Person2 = {
  [key: string]: string;
};

const person2: Person2 = { aadsda: '2212', 223: 'sddsd', ['true']: 'aasffsa' };
