import pilou from 'pilou';
import {TOKEN_KEY} from './storage';


export default class HTTP {
    constructor(resourceName, storage) {
        this.storage = storage;
        this.resource = pilou(resourceName);
    }

    getRequestConfig() {
        const config = this.storage.json();
        return {
            baseURL: config.baseURL,
            headers: {Authorization: `JWT ${config[TOKEN_KEY]}`}
        };
    }

    create(resource) {
        return this.resource.create(resource, this.getRequestConfig());
    }

    all(params = {}) {
        const config = this.getRequestConfig();
        config.params = params;
        return this.resource.all(config);
    }

    get(resource) {
        return this.resource.get(resource, this.getRequestConfig());
    }

    update(resource) {
        return this.resource.update({id: resource.id}, resource, this.getRequestConfig());
    }

    remove(resource) {
        return this.resource.delete(resource, this.getRequestConfig());
    }
}
