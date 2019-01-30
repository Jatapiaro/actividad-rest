export default class Vacant {

    constructor() {
        this.name = "";
        this.description = "";
        this.salary = "";
        this.benefits = "";
    }

    fillFromResponseData(vacant) {
        this.name = vacant.name;
        this.description = vacant.description;
        this.salary = vacant.salary;
        this.benefits = vacant.benefits;
    }

}
