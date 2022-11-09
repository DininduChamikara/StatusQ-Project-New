import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from './reducers/login.slice';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    login: loginReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})