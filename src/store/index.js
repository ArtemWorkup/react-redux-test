import { combineReducers, createStore } from "redux";
import { userReducer } from "./userReducer";
import { articlesReducer } from "./articlesReducer";


export const store = createStore(combineReducers({
    user: userReducer,
    articles: articlesReducer
}));