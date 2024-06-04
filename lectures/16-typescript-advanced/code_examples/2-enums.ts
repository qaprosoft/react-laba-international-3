enum Role { // automatically set numbers
	ADMIN, // 0
	READ_ONLY, // 1
	AUTHOR, // 2
}

enum RoleDuplicated { // we can set numbers on our own
	ADMIN = 10, // 0
	READ_ONLY = 20, // 1
	AUTHOR = 30, // 2
}

type personType = {
	name: string;
	age: number;
	hobbies: string[];
	role: number;
	roleCustom: number;
};

const personInstance: personType = {
	name: 'Ilya',
	age: 22,
	hobbies: ['Cooking', 'Sports'],
	role: Role.AUTHOR,
	roleCustom: RoleDuplicated.ADMIN,
};

console.log('personInstance', personInstance);

export {};
