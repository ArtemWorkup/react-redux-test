const defaultState = {
    isAdmin: null,
    email: null,
    password: null,
    username: null
}



export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            if(action.payload.username)
                return action.payload;
            return state;
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
}