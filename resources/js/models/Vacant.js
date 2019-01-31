export default class Vacant {

    constructor() {
        this.id = -1;
        this.name = "";
        this.description = "";
        this.salary = "";
        this.benefits = "";
    }

    fillFromResponseData(vacant) {
        this.id = vacant.id;
        this.name = vacant.name;
        this.description = vacant.description;
        this.salary = vacant.salary;
        this.benefits = vacant.benefits;
    }

}
