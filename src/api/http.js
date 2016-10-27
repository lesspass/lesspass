import axios from 'axios';
import {TOKEN_KEY} from './storage';


export default class HTTP {
    constructor(resource, storage) {
        this.storage = storage;
        this.resource = resource;
    }

    getRequestConfig(params = {}) {
        const config = this.storage.json();
        return {
            ...params,
            baseURL: config.baseURL,
            headers: {Authorization: `JWT ${config[TOKEN_KEY]}`}
        };
    }

    create(resource, params = {}) {
        return axios.post('/api/' + this.resource + '/', resource, this.getRequestConfig(params));
    }

    all(params = {}) {
        return axios.get('/api/' + this.resource + '/', this.getRequestConfig(params));
    }

    get(resource, params = {}) {
        return axios.get('/api/' + this.resource + '/' + resource.id + '/', this.getRequestConfig(params));
    }

    update(resource, params = {}) {
        return axios.put('/api/' + this.resource + '/' + resource.id + '/', resource, this.getRequestConfig(params));
    }

    remove(resource, params = {}) {
        return axios.delete('/api/' + this.resource + '/' + resource.id + '/', this.getRequestConfig(params));
    }
}
