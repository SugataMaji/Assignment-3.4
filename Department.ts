

/**
 * The Department class is Abstract class which showing department details
 *
 *@class Department:Abstract
 *@constructor
**/
abstract class Department {
	constructor(public name: string) {
	}

	printName(): void {
		console.log("Department name: " + this.name);
	}

	abstract printMeeting(): void; // must be implemented in derived classes
    abstract generateReports(): void 
}


/**
 * The AccountingDepartment class is drived class which showing department details
 *
 *@class AccountingDepartment
 *@extends Department
 *@constructor
**/

class AccountingDepartment extends Department {
  constructor() {
  	super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
  	console.log("The Accounting Department meets everyday at 11am.");
  }

  generateReports(): void {
		console.log("Please wait, Generating accounting reports...");
  }
}

class SalesDepartment extends Department {
  constructor() {
  	super("Sales and Report"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
  	console.log("The Sales Department meets everyday at 9am.");
  }

  generateReports(): void {
		console.log("Please wait, Generating sales reports...");
  }
}


let department: Department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass

department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type
let department1: Department; // ok to create a reference to an abstract type
department1 = new SalesDepartment(); // ok to create and assign a non-abstract subclass
department1.printName();
department1.printMeeting();
department1.generateReports(); // error: method doesn't exist on declared abstract type