import { getStorage, removeStorage } from "./storage";

export function returnToken() {
    return getStorage('localStorage', 'token') || getStorage('sessionStorage', 'token');
}

export function removeToken() {
    removeStorage('localStorage', 'token');
    removeStorage('sessionStorage', 'token');
}

export const fontFamily = ['Times New Roman', 'Caesar Dressing', 'Coming Soon', 'Montserrat', 'Open Sans'];