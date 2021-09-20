// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: 'Timothy',
// 	age: 26,
// 	hobbies: ['hiking', 'cars'],
// 	role: [2, 'Software Engineer'],
// };

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: 'tim',
	age: 26,
	hobbies: ['sports', 'cooking'],
	role: Role.AUTHOR,
};

console.log(person.role);
