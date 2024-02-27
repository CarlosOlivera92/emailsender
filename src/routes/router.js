// router.js
import { Router as expressRouter } from 'express';

export default class Router {
    constructor() {
        this.router = expressRouter();
        this.init();
    }

    getRouter() {
        return this.router;
    }

    init() {}

    get(path, ...callbacks) {
        this.router.get(path, ...callbacks);
    }

    post(path, ...callbacks) {
        this.router.post(path, ...callbacks);
    }

    put(path, ...callbacks) {
        this.router.put(path, ...callbacks);
    }

    delete(path, ...callbacks) {
        this.router.delete(path, ...callbacks);
    }
}
