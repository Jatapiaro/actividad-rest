export default class Employee {

    constructor() {
        this.id = -1;
        this.name = "";
        this.salary = "";
    }

    fillFromResponseData(employee) {
        this.id = employee.id;
        this.name = employee.name;
        this.salary = employee.salary;
    }

}
