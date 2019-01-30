export default class HttpService {

    /**
     * Makes a GET request to a given resource
     * @param {*} route to be called
     */
    makeGet(route) {
        const endpoint = this.getEnpoint(route);
        return window.axios.get(endpoint).then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err.response.data);
        });
    }

    /**
     * Makes a POST request to a given resource
     * @param {*} route to be called
     * @param {*} body or payload to be stored
     */
    makePost(route, body) {
        const endpoint = this.getEnpoint(route);
        const headers = this.getHeaders();
        return window.axios.post(endpoint, body, {headers: headers}).then(res => {
            return Promise.resolve(res.data.data);
        })
        .catch(err => {
            return Promise.reject(err.response.data);
        });
    }

    /**
     * Makes a PUT request to a given resource
     * @param {*} route to be called
     * @param {*} body or payload to be updated
     */
    makePut(route, body) {
        const endpoint = this.getEnpoint(route);
        const headers = this.getHeaders();
        return window.axios.put(endpoint, body, { headers: headers }).then(res => {
            return Promise.resolve(res.data.data);
        })
        .catch(err => {
            return Promise.reject(err.response.data);
        });
    }

    /**
     * Makes a DELETE request to a given resource
     * @param {*} route to be called
     */
    makeDelete(route, body = {}) {
        const endpoint = this.getEnpoint(route);
        const headers = this.getHeaders();
        return window.axios.delete(endpoint, body, { headers: headers }).then(res => {
            return Promise.resolve(res.data.data);
        })
        .catch(err => {
            return Promise.reject(err.response.data);
        });
    }

    /**
     * Get the constant headers to be appended to each request
     */
    getHeaders() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return headers;
    }

    /**
     * Given an endpoint route, it appends the base url of the server
     * to have te full url to be called
     * @param {*} route
     */
    getEnpoint(route) {
        return `${window.baseUrl}/api/v1${route}`;
    }

}
