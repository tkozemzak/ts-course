"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'tim',
    age: 26,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR,
};
console.log(person.role);
