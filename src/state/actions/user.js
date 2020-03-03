let store = {}

export const SET_USER = 'SET_USER'
export function setUser(user) {
    store = user;

    return {
        ...user,
        type: SET_USER
    }
}

export const GET_USER = 'GET_USER'
export function getUser() {
    return {
        ...store,
        type: GET_USER
    }
}