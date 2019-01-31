export default class VacantService {

    constructor(httpService) {
        this.httpService = httpService;
        this.route = '/vacancies';
    }

    /**
     * Return all the vacancies on the db
     */
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
     * Stores a given vacant on the db
     * @param {*} vacant
     */
    store(vacant) {
        const data = this.getStoreData(vacant);
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
     * @param {*} vacant
     */
    update(vacant) {
        const route = `${this.route}/${vacant.id}`;
        const data = this.getStoreData(vacant);
        return this.httpService.makePut(route, data)
            .then( res => {
                return Promise.resolve(res);
            })
            .catch( err => {
                return Promise.reject(err)
            });
    }

    /**
     * Removes the given vacant
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
     * Puts the vacant data on the object format
     * that the server understands
     * @param {*} vacant
     */
    getStoreData(vacant) {
        const data = {
            vacant: vacant
        };
        return data;
    }

}
