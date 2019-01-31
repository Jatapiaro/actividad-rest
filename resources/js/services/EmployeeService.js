export default class EmployeeService {

    constructor(httpService) {
        this.httpService = httpService;
        this.route = "/employees";
    }

    all() {
        return this.httpService.makeGet(this.route)
            .then((res) => {
                return Promise.resolve(res);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

    /**
     * Stores a given employee on the db
     * @param {*} employee
     */
    store(employee) {
        const data = this.getStoreData(employee);
        return this.httpService.makePost(this.route, data, false)
            .then( res => {
                return Promise.resolve(res);
            })
            .catch( err => {
                return Promise.reject(err)
            });
    }

    /**
     * Fetchs the desired resource given an id
     * @param {*} id
     */
    show(id) {
        const route = `${this.route}/${id}`;
        return this.httpService.makeGet(route)
            .then((res) => {
                return Promise.resolve(res);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

    /**
     * Updates a given vacant
     * @param {*} employee
     */
    update(employee) {
        const route = `${this.route}/${employee.id}`;
        const data = this.getStoreData(employee);
        return this.httpService.makePut(route, data)
            .then( res => {
                return Promise.resolve(res);
            })
            .catch( err => {
                return Promise.reject(err)
            });
    }

    /**
     * Removes the given employee
     * @param {*} id
     */
    delete(id) {
        const route = `${this.route}/${id}`;
        return this.httpService.makeDelete(route)
        .then((res) => {
            return Promise.resolve(res);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
    }


    /**
     * Puts the employee data on the object format
     * that the server understands
     * @param {*} employee
     */
    getStoreData(employee) {
        const data = {
            employee: employee
        };
        return data;
    }

}
