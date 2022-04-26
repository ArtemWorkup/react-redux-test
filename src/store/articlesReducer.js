import { ARTICLES } from "../constants";

const defaultState = {
    list: ARTICLES
}

export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const APPROVE_ARTICLE = 'APPROVE_ARTICLE';

export const articlesReducer = (state = defaultState, action) => {
    const copy = [ ...state.list ];
    switch (action.type) {
        case CREATE_ARTICLE:
            return { ...state, list: copy.concat([ action.payload ]) };
        case DELETE_ARTICLE:
            copy.splice(action.payload, 1);
            return { ...state, list: copy };
        case APPROVE_ARTICLE:
            copy[action.payload].approved = true;
            return { ...state, list: copy };
        default:
            return state;
    }
}