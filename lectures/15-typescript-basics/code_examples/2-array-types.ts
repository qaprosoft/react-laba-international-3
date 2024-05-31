const hobbies = ['Cooking', 'Sport']; // automatically defined type "string[]"

const typedHobbies: string[] = ['Cooking', 'Sports'];

// union
const unionType = [2, 'test', 213, 123, 'test2']; // the same
const unionType2: (string | number)[] = [1, 'test', 213, 123, 'test2']; // the same

// tuple
const tupleType: [string, number] = ['123', 123]; // should be exactly two values which defined in type
