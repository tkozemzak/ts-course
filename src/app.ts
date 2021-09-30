class Department {
	private employees: string[] = [];

	constructor(private readonly id: string, public name: string) {
		this.name = name;
	}
	describe() {
		console.log(`Department (${this.id}): ${this.name}`);
	}
	addEmployee(employee: string) {
		this.employees.push(employee);
	}
	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		super(id, 'IT');
	}
}

const accounting = new ITDepartment('d1', ['Tim']);

// console.log(accounting.describe());

accounting.addEmployee('Tim');
accounting.addEmployee('Max');

accounting.describe();
accounting.printEmployeeInformation();
