import { headers, parseJSON } from './utils';
import { CONFIG } from "../config"

export function postSession(email, password) {
    const options = {
        headers: headers(),
        method: 'POST',
        body: JSON.stringify({ email, password })
    };

    return fetch('/api/verifyLogin', options)
        .then(parseJSON);
}

export function postUserRegistration(user) {
    const options = {
        headers: headers(),
        method: 'POST',
        body: JSON.stringify(user)
    };

    return fetch('/api/registerUser', options)
        .then(parseJSON);
}

export function verifyUserToken(id, token) {
    const options = {
        headers: headers(),
        method: 'POST',
        body: JSON.stringify({id, token})
    };

    return fetch('/api/verifyToken', options)
        .then(parseJSON);
}
