import { SESSION_LOAD, SESSION_LOGIN, SESSION_LOGOUT } from '../actions';

const localStorage = window.localStorage;

export function initialize() {
    return (dispatch) => {
        const { email, name, token } = localStorage;
        if (email && token) {
            dispatch({
                type: SESSION_LOAD, payload: { email, name, token }
            });
        } else {
            window.location = '/';
        }
    };
}

export function login(user, password, done) {
    const payload = {
        user: user,
    };
    return (
        dispatch({ type: SESSION_LOGIN, payload })
    );
}

export function logout() {
    return (dispatch) => {
        dispatch({ type: SESSION_LOGOUT });
        window.location.href = '/';
    };
}
