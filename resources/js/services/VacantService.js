export default class VacantService {

    constructor(httpservice) {
        this.httpservice = httpservice;
        this.route = '/vacancies';
    }

    all() {
        this.httpservice.makeGet(this.route)
            .then((res) => {
                return Promise.resolve(res);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

}
