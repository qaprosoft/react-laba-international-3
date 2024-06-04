interface Person {
	name: string;
	age: number;
}
type KeyType = keyof Person; // also works

const printPersonProp = (person, property: keyof Person) => {
	console.log(`Person prop: ${person[property]}`);
};

const person: Person = {
	name: 'Ilya',
	age: 23,
};

printPersonProp(person, 'name');

export {};
