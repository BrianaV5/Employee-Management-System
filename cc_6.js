//step 2
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;

    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
//step 3
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
     }
     describe () {
        return `${this.name} manages ${this.teamSize} people in the ${this.department} department.`;
     }
}
//step 4
const emp1 = new Employee("Kim Johnson", "Finance");
const emp2 = new Employee("Jim Smith", "Data Analytics");

const mgr1 = new Manager("Micheal Brown","Marketing",10,)
const mgr2 = new Manager("Emily Edwards","IT",6);

//console.log(emp1.describe());
//console.log(emp2.describe());
//console.log(mgr1.describe());
//console.log(mgr2.describe());

//step 5 
class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(emp=> {
            console.log(emp.describe());
        });
    }
}
//step 6 Instantiate
const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);
company.listEmployees();