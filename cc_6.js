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


