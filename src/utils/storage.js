import { warn } from './loger';
let memoryStorage = {};

export const setStorage = (storage, key, value) => {
    try {
        memoryStorage[key] = value;
        [storage].setItem(key, value);
    } catch (e) {
        warn(`Error on setting sessionStorage by ${key} key!`);
    }
};

export const getStorage = (storage, key) => {
    try {
        return [storage].getItem(key);
    } catch (e) {
        warn(`Error on getting sessionStorage by name ${key} (${e})`);
        return memoryStorage[key] || null;
    }

};

export const removeStorage = (storage, name) => {
    try {
        delete memoryStorage[name];
        [storage].removeItem(name);
    } catch (error) {
        warn(`Error on removing sessionStorage by ${name} key!`);
    }
};

export const clearStorage = (storage) => {
    try {
        memoryStorage = {};
        [storage].clear();
    } catch (e) {
        warn(`Error on clearing sessionStorage!`);
    }
};

export function returnToken() {
    return window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
}

export function setToken(token, rememberMe) {
    rememberMe ? window.localStorage.setItem('token', token) : window.sessionStorage.setItem('token', token);
}
