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

}
